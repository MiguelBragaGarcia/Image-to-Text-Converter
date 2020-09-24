import { Router } from 'express';
import ProcessImageService from 'services/ProcessImageService';
import multer from 'multer';
import { celebrate, Joi, Segments } from 'celebrate';
import ensureFileHasUploaded from 'middlewares/ensureFileHasUploaded';
import uplaodConfig from '../config/upload';

const processRouter = Router();

const processImage = new ProcessImageService();
const upload = multer(uplaodConfig.multer);

processRouter.post(
  '/',
  upload.single('image'),
  ensureFileHasUploaded,
  celebrate({
    [Segments.BODY]: {
      language: Joi.string().required(),
    },
  }),
  async (request, response) => {
    const { language } = request.body;

    const convertedText = await processImage.execute({
      filename: request.file.filename,
      language,
    });

    return response.json(convertedText);
  },
);

export default processRouter;
