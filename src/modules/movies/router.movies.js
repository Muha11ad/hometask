import { Router } from "express";
import { postMovie } from "./movies.post/post.movies.js";
import { getMovies } from "./movies.post/get.movies.js";
import { putMovies } from "./movies.post/put.movies.js";
import { deleteMovie } from "./movies.post/delete.movies.js";

export const MoviesRouter = Router();

MoviesRouter.post("/", postMovie);
MoviesRouter.get("/", getMovies);
MoviesRouter.put("/:id", putMovie);
MoviesRouter.delete("/:id", deleteMovie);
