import { Router } from "express";
import { postMovie } from "./movies.post/post.movies.js";
import { getMovie } from "./movies.post/get.movies.js";
import { putMovie } from "./movies.post/put.movies.js";
import { deleteMovie } from "./movies.post/delete.movies.js";

export const MoviesRouter = Router();

MoviesRouter.post("/post", postMovie);
MoviesRouter.get("/", getMovie);
MoviesRouter.put("/put/:id", putMovie);
MoviesRouter.delete("/delete/:id", deleteMovie);
