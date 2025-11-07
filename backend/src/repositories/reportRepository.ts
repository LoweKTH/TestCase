import { getPool } from '../db/pool.js';

export async function insert(report_date: string, comment?: string){
    const pool = getPool();
    const { rows } = await pool.query(
        `insert into sick_reports (report_date, comment)
        values ($1, $2)
        returning id, report_date, comment, created_at`,
        [report_date, comment ?? null]
    );
    return rows[0];
}

export async function list(){
    const pool = getPool();
    const { rows } = await pool.query(
        `select id, report_date, comment, created_at
        from sick_reports
        order by created_at desc`
    );
    return rows;
}