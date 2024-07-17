import { inject, singleton } from 'tsyringe';
import { FastifyReply, FastifyRequest } from 'fastify';
import { GrafanaWebhookBody } from '../interfaces/grafana-webhook-body.interface';
import { MountService } from '../services/mount.service';
import { DockerService } from '../services/docker.service';

@singleton()
export class MountFixController {
  constructor(
    private dockerService: DockerService,
    private mountService: MountService,
  ) {}

  public async postMountFix(request: FastifyRequest, reply: FastifyReply) {
    if ((request.body as GrafanaWebhookBody)?.status === 'resolved') {
      console.log('Grafana calling to alert resolved');
      return reply.send('ok');
    }

    const partitionName = await this.mountService.getPartitionPathByDriveIdentifier('EF277A54-230F-49C8-AF0D-4BD06510DB1F');
    if (!partitionName) {
      return reply.status(500).send('cant find partition');
    }
    await this.mountService.mountDisk(partitionName, '/media/diogo/hdexterno-p500');

    let containers = await this.dockerService.inspectAllRunningContainers();
    if (!containers?.length) {
      return reply.status(500).send('no containers running');
    }

    containers = containers.filter(
      (container) => container.mounts.filter((mountPath) => mountPath.includes('/media/diogo/hdexterno-p500')).length > 0,
    );

    await this.dockerService.restartContainers(containers);

    return reply.send('ok');
  }
}
