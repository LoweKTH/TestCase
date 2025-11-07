import { createReportSchema } from '../validation/reportSchemas.js';
import * as repo from '../repositories/reportRepository.js';

export async function create(payload: unknown){
    const parsed = createReportSchema.parse(payload); //kastar vid ogiltig payload
    return repo.insert(parsed.report_date, parsed.comment);
}

export async function getAll(){
    return repo.list();
}