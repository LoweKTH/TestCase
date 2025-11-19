import "dotenv/config";
import { migrate } from "./db/migrate.js";
import { buildApp } from "./app.js";
import { config } from "./config/config.js";

console.log("DEBUG DATABASE_URL =", process.env.DATABASE_URL); // <-- tillfälligt

(async () => {
    try{
        await migrate();
        console.log("Database migrated");

        const app = buildApp();

        app.listen(config.port, () => {
            console.log(`ÀPI listening on http://localhost:${config.port}`);
        });
    }catch(err){
        console.error("Failed to start server", err);
        process.exit(1);
    }
})();
