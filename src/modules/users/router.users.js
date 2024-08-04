import { Router } from "express";
import { registerUser } from "./controller.users/register.users.js";
import { loginUser } from "./controller.users/login.users.js";

export const AuthRouter = Router();

AuthRouter.post("/register", registerUser);
AuthRouter.post("/login", loginUser);
