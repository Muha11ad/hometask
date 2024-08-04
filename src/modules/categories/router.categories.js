import { Router } from "express";
import { postCategories } from "./controller.categories/post.categories.js";
import { getCategories } from "./controller.categories/get.categories.js";
import { putCategory } from "./controller.categories/put.categories.js";
import { deleteCategory } from "./controller.categories/delete.categories.js";

export const CategoriesRouter = Router()

CategoriesRouter.put("/put/:id", putCategory)
CategoriesRouter.post("/post", postCategories)
CategoriesRouter.get("/", getCategories)
CategoriesRouter.delete("/delete/:id", deleteCategory)