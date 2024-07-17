import { singleton } from 'tsyringe';

import util from 'util';
import { exec as execWithCallback } from 'child_process';
import { SFDiskOutputInterface } from '../interfaces/sfdisk.interface';
const exec = util.promisify(execWithCallback);

@singleton()
export class MountService {
  constructor() {}

  public async getPartitionPathByDriveIdentifier(driveIdentifier: string): Promise<string | void> {
    try {
      const { stdout, stderr } = await exec('sudo jc sfdisk -l');
      if (stderr) {
        throw new Error(stderr);
      }
      const drives: SFDiskOutputInterface[] = JSON.parse(stdout);

      const drive = drives.find((_drive) => _drive.disk_identifier === driveIdentifier);
      if (drive?.partitions?.length) {
        console.log('Found drive and partition', drive);
        return drive.partitions[0].device;
      }
    } catch (e) {
      console.error(e);
      throw e;
    }
  }

  public async mountDisk(devicePath: string, folderPath: string) {
    try {
      console.log(`Trying to mount with: sudo mount ${devicePath} ${folderPath}`);
      const { stderr } = await exec(`sudo mount ${devicePath} ${folderPath}`);
      if (stderr) {
        throw new Error(stderr);
      }
      return true;
    } catch (e) {
      console.error(e);
      throw e;
    }
  }
}
