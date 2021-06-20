import { Router } from 'express';
import multer from 'multer';
import uploadConfig from './config/upload';

import SessionController from './controllers/SessionController';
import HouseController from './controllers/HouseController';

const routes = new Router();
const upload = multer(uploadConfig)

routes.post('/sessions', SessionController.store); // to login

routes.post('/houses', upload.single('thumbnail'), HouseController.store);//to register houses in application

export default routes;
