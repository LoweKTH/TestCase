import { z } from 'zod';


export const createReportSchema = z.object({
    report_date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Invalid date format, expected YYYY-MM-DD"),
    comment: z.string().max(1000).optional()
});

export type createReportInput = z.infer<typeof createReportSchema>;