import type { ErrorRequestHandler } from 'express';

export const errorHandler: ErrorRequestHandler = (err, _req, res, _next) => {
    if(err?.name === "ZodError") {
        return res.status(400).json({
            error: "Invalid payload",
            details: err.errors
        });
    }
    console.error(err);
    res.status(500).json({
        error: "Internal Server Error"
    });
};

