import { Router } from 'express';
import { asyncHandler } from '../middleware/asyncHandler.js';
import { listReports, createReport } from '../controllers/reportController.js';

export const reportRouter = Router();

reportRouter.get('/', asyncHandler(listReports));
reportRouter.post('/', asyncHandler(createReport));