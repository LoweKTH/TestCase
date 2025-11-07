import type { Request, Response } from 'express';
import * as svc from '../services/reportService.js';

export async function listReports(_req: Request, res: Response) {
    const items = await svc.getAll();
    res.json(items);
}

export async function createReport(req: Request, res: Response) {
    const created = await svc.create(req.body);
    res.status(201).json(created);
}