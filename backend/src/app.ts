import express from "express";
import cors from "cors";
import { config } from "./config/config.js";
import { reportRouter } from "./routes/reportRoutes.js";
import { errorHandler } from "./middleware/errorHandler.js";

export function buildApp(){
    const app = express();

    
    app.use(cors({ origin: config.corsOrigin })); 
    app.use(express.json()); 


    app.use("/api/reports", reportRouter);

    app.use(errorHandler);

    return app;
}
