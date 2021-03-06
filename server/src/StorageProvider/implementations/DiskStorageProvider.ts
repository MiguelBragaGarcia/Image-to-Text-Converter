import fs from 'fs';
import path from 'path';
import IStorageProvider from 'StorageProvider/models/IStorageProvider';
import uploadConfig from '../../config/upload';

class DiskStorageProvider implements IStorageProvider {
  public async deleteFile(file: string): Promise<void> {
    const filePath = path.resolve(uploadConfig.tmpFolder, file);

    try {
      await fs.promises.stat(filePath);
    } catch {
      return;
    }

    await fs.promises.unlink(filePath);
  }
}

export default DiskStorageProvider;
