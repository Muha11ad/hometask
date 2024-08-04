import { Router } from "express";
import { getMovie } from "./movies.post/get.movies.js";
import { putMovie } from "./movies.post/put.movies.js";
import { postMovie } from "./movies.post/post.movies.js";
import { deleteMovie } from "./movies.post/delete.movies.js";
import { verifyRole } from "../../middlewares/verify.middleware/verify.role.js"

export const MoviesRouter = Router();

MoviesRouter.post("/post", verifyRole("admin"), postMovie);
MoviesRouter.get("/", verifyRole("admin", "user"),getMovie);
MoviesRouter.put("/put/:id", verifyRole("admin"),putMovie);
MoviesRouter.delete("/delete/:id",verifyRole("admin"), deleteMovie);
