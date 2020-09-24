import path from 'path';
import crypto from 'crypto';

import multer, { StorageEngine, FileFilterCallback } from 'multer';
import AppError from 'errors/AppError';

interface IUploadConfig {
  tmpFolder: string;
  multer: {
    storage: StorageEngine;
    fileFilter: FileFilterCallback;
  };
}

const tmpFolder = path.resolve(__dirname, '..', '..', 'tmp');

export default {
  tmpFolder,

  multer: {
    storage: multer.diskStorage({
      destination: tmpFolder,
      filename(request, file, callback) {
        const fileHash = crypto.randomBytes(10).toString('hex');
        const fileName = `${fileHash}-${file.originalname}`;
        return callback(null, fileName);
      },
    }),

    fileFilter: (request, file, callback) => {
      const ext = path.extname(file.originalname);
      if (
        ext !== '.bmp' &&
        ext !== '.jpg' &&
        ext !== '.png' &&
        ext !== '.pbm'
      ) {
        return callback(
          new AppError(
            'Only these image formats are supported. [PNG, BMP, JPG, PBM]',
          ),
        );
      }

      return callback(null, true);
    },
  },
} as IUploadConfig;
