import { getPool } from "./pool.js";

/**
 * Körs vid app-start. Skapar tabeller/index om de inte finns.
 * Idempotent: säkert att köra flera gånger. 
 */

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
    // Index för snabbare sökningar på datum, index görs bara på de man ofta filtrerar/sorterar på
    // Inserts/updates blir lite långsammare för att indexet också måste uppdateras därav ovan kommentar
    await pool.query(sql);
}