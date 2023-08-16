import express from "express";
import { UserController } from "./user.controller";

const router = express.Router();

router
  .get("/", UserController.getAllUsers)
  .post("/create-user", UserController.createUser)
  .post("/profile", UserController.insertOrUpdateProfile);

export const UserRoute = router;
