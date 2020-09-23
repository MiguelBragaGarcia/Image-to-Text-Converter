import { Router } from 'express';
import ProcessImageService from 'services/ProcessImageService';
import multer from 'multer';
import uplaodConfig from '../config/upload';

const processRouter = Router();

const processImage = new ProcessImageService();
const upload = multer(uplaodConfig.multer);

processRouter.post('/', upload.single('image'), async (request, response) => {
  const convertedText = await processImage.execute({
    filename: request.file.filename,
  });

  return response.json(convertedText);
});

export default processRouter;
