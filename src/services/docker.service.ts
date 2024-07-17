import { singleton } from 'tsyringe';

import { DockerStatsInterface } from '../interfaces/docker-inspect.interface';

import util from 'util';
import { exec as execWithCallback } from 'child_process';
const exec = util.promisify(execWithCallback);

@singleton()
export class DockerService {
  constructor() {}

  async inspectAllRunningContainers(): Promise<ResumedContainer[] | undefined> {
    try {
      const { stdout, stderr } = await exec('docker inspect $(docker ps -aq)');
      if (stderr) {
        throw new Error(stderr);
      }

      const containers: DockerStatsInterface[] = JSON.parse(stdout);
      return containers.map(
        (container) =>
          ({
            id: container.Id,
            short_id: container.Id.substring(0, 12),
            name: container.Name.substring(1, container.Name.length),
            mounts: container.Mounts.map((mount) => mount.Source),
          }) as ResumedContainer,
      );
    } catch (e) {
      console.error(e);
    }
  }

  async restartContainers(containers: ResumedContainer[]) {
    const promises = containers.map((container: ResumedContainer) => {
      return new Promise((resolve, reject) => {
        try {
          console.log(`Restarting container (${container.short_id} - ${container.name})`);
          exec(`docker restart ${container.short_id}`)
            .then(() => {
              console.log(`Done restarting container (${container.short_id} - ${container.name})`);
              resolve(container);
            })
            .catch((e) => {
              console.log(`Error restarting container (${container.short_id} - ${container.name})`);
              console.log(e);
              reject(e);
            });
        } catch (e) {
          console.error(e);
          reject(e);
        }
      });
    });

    await Promise.all(promises);
  }
}

export interface ResumedContainer {
  id: string;
  short_id: string;
  name: string;
  mounts: string[];
}
