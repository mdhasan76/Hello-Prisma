import { Request, Response } from "express";
import { UserService } from "./user.service";

const getAllUsers = async (req: Request, res: Response) => {
  try {
    const result = await UserService.getUserFromDB();
    res.send({
      status: 200,
      message: "Users Retrive successfully",
      data: result,
    });
  } catch (err) {
    res.send(err);
  }
};

const createUser = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const result = await UserService.createUserToDB(data);
    res.send({
      status: 200,
      message: "Create Users successfully",
      data: result,
    });
  } catch (err) {
    res.send(err);
  }
};

const insertOrUpdateProfile = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const result = await UserService.insertOrUpdateProfileToDB(data);
    res.send({
      status: 200,
      message: "update profile successfully",
      data: result,
    });
  } catch (err) {
    res.send(err);
  }
};

export const UserController = {
  createUser,
  getAllUsers,
  insertOrUpdateProfile,
};
