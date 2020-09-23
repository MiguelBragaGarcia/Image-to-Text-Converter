import Tesseract from 'tesseract.js';
import path from 'path';

import IStorageProvider from 'StorageProvider/models/IStorageProvider';
import convertoStringToPhrases from 'utils/ConvertStringToPhrases';
import DiskStorageProvider from '../StorageProvider/implementations/DiskStorageProvider';

interface IRequest {
  filename: string;
}

class ProcessImageService {
  private diskStorageProvider: IStorageProvider;

  constructor() {
    this.diskStorageProvider = new DiskStorageProvider();
  }

  public async execute({ filename }: IRequest): Promise<string[]> {
    const image = path.resolve(__dirname, '..', '..', 'tmp', filename);

    const response = await Tesseract.recognize(image, 'eng');

    const phrases = convertoStringToPhrases(response.data.text);

    await this.diskStorageProvider.deleteFile(filename);
    return phrases;
  }
}

export default ProcessImageService;
