import { Pool } from 'pg';
let pool: Pool | null = null;

export function getPool(): Pool {
  if (!pool) {
    const url = process.env.DATABASE_URL!;
    const u = new URL(url);
    console.log(`[DB] Connecting as ${u.username}@${u.hostname}:${u.port}/${u.pathname.slice(1)}`);
    pool = new Pool({ 
      connectionString: url,
       ssl: process.env.PGSSLMODE === 'require' ? { rejectUnauthorized: false } : undefined });
  }
  return pool;
}
