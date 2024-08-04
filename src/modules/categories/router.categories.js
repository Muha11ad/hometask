import { Router } from "express";
import { putCategory } from "./controller.categories/put.categories.js";
import { getCategories } from "./controller.categories/get.categories.js";
import { postCategories } from "./controller.categories/post.categories.js";
import { deleteCategory } from "./controller.categories/delete.categories.js";
import { verifyRole } from "../../middlewares/verify.middleware/verify.role.js";

export const CategoriesRouter = Router();

CategoriesRouter.put("/put/:id", verifyRole("admin"), putCategory);
CategoriesRouter.post("/post", verifyRole("admin"), postCategories);
CategoriesRouter.get("/", verifyRole("admin", "user"), getCategories);
CategoriesRouter.delete("/delete/:id", verifyRole("admin"), deleteCategory);
