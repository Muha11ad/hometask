import { Router } from "express";
import { postUser, getUsers, putUser, deleteUser } from "./controller.users.js";

export const UsersRouter = Router();

UsersRouter.post("/", postUser);
UsersRouter.get("/", getUsers);
UsersRouter.put("/:id", putUser);
UsersRouter.delete("/:id", deleteUser);
