export type SickReport = {
  id: number;            
  report_date: string;   // "YYYY-MM-DD"
  comment: string | null;
  created_at: string;    // ISO timestamp
};
