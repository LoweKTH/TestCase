import { getPool } from "./pool.js";


export async function migrate(){
    const pool = getPool();
    const sql = `
    create table if not exists sick_reports(
        id serial primary key,
        report_date date not null,
        comment text,
        created_at timestamptz not null default now()
    );

    create index if not exists idx_sick_reports_date on sick_reports(report_date);
    `;

    await pool.query(sql);
}
