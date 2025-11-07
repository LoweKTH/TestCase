import { http } from "./client";
import type { SickReport } from "../utils/types.js";

export function listReports(): Promise<SickReport[]> {
  return http<SickReport[]>("/api/reports");
}

export type CreateReportDto = { report_date: string; comment: string | null };

export function createReport(body: CreateReportDto): Promise<SickReport> {
  return http<SickReport>("/api/reports", {
    method: "POST",
    body: JSON.stringify(body),
  });
}
