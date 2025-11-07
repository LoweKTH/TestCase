import express from "express";
import cors from "cors";
import { config } from "./config/config.js";
import { reportRouter } from "./routes/reportRoutes.js";
import { errorHandler } from "./middleware/errorHandler.js";

export function buildApp(){
    const app = express();

    // Middleware: alla requests går igenom dessa först
    app.use(cors({ origin: config.corsOrigin })); // Tillåt CORS för frontend-appen
    app.use(express.json()); // Parsar JSON-body

    // Api routes
    app.use("/api/reports", reportRouter);

    // Felhantering (ska ligga sist)
    app.use(errorHandler);

    return app;
}