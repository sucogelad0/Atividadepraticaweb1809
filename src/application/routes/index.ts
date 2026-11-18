import { Router } from 'express';
import { asyncHandler } from '../../shared/middlewares/errors.js';
import { SessionController } from '../controllers/SessionController.js';
import { EventController } from '../controllers/EventController.js';
import { RegistrationController } from '../controllers/RegistrationController.js';

export const routes = Router();
const list = new SessionController();
const summary = new EventController();
const operations = new RegistrationController();

routes.get('/sessions', asyncHandler(list.list));
routes.get('/events/:eventId/occupancy', asyncHandler(summary.occupancy));
routes.post('/registrations', asyncHandler(operations.create));
routes.patch('/registrations/:id', asyncHandler(operations.update));
routes.delete('/registrations/:id', asyncHandler(operations.delete));
