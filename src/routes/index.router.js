import { Router } from "express";
import { CategoriesRouter } from "../modules/categories/router.categories.js";
import { MoviesRouter } from "../modules/movies/router.movies.js";
 
export const customRouter = Router()

// customRouter.use("/auth", AuthRouter)
customRouter.use("/movies", MoviesRouter)
customRouter.use("/categories", CategoriesRouter)