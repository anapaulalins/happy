import {Router } from 'express';
import multer from 'multer';
import OrphanagesController from './controllers/OrphanagesControllers';

import uploadConfig from './config/upload';
const routes = Router()

const upload = multer(uploadConfig)

routes.post('/orphanages',  upload.array('images') ,OrphanagesController.create,)
routes.get('/orphanages', OrphanagesController.index)
routes.get('/orphanages/:id', OrphanagesController.show)

export default routes