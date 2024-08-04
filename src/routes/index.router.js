import { Router } from "express";
import { CategoriesRouter } from "../modules/categories/router.categories.js";
 
export const customRouter = Router()

customRouter.use("/auth", AuthRouter)
customRouter.use("/categories", CategoriesRouter)
customRouter.use("/movies", verifyRole("admin", "users"), MoviesRouter)