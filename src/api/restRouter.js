import express from 'express';

import { restaurantRouter } from './resources/restaurant';
import { apiErrorHandler } from './modules/errorHandler';

export const restRouter = express.Router();

restRouter.use('/restaurant', restaurantRouter);
restRouter.use(apiErrorHandler);
