import "dotenv/config";
import { migrate } from "./db/migrate.js";
import { buildApp } from "./app.js";
import { config } from "./config/config.js";

console.log("DEBUG DATABASE_URL =", process.env.DATABASE_URL); // <-- tillfälligt

(async () => {
    try{
        // 1. Säkerställ att DB-tabeller finns
        await migrate();
        console.log("Database migrated");

        // 2. Bygg express-appen
        const app = buildApp();

        // 3. Starta servern
        app.listen(config.port, () => {
            console.log(`ÀPI listening on http://localhost:${config.port}`);
        });
    }catch(err){
        console.error("Failed to start server", err);
        process.exit(1);
    }
})();