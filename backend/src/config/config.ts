import "dotenv/config";  

export const config = {
    port: Number(process.env.PORT ?? 4000),
    corsOrigin: process.env.CORS_ORIGIN ?? "http://localhost:5173",
    dbUrl: process.env.DB_URL!, // finns i .env under utveckling
};