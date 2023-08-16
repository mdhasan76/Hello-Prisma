import express, { Application } from "express";
import cors from "cors";
import exp from "constants";
import { UserRoute } from "./modules/user.route";

const app: Application = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", UserRoute);

export default app;
