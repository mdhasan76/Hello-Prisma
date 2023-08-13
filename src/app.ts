import express, { Application } from "express";
import cors from "cors";
import exp from "constants";

const app: Application = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

export default app;
