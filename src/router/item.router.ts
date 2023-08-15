import { Router } from "express";
import {
  deleteItem,
  getItem,
  getItems,
  postItem,
  updateItem,
} from "../controllers/item.controller";
import { logMiddleware } from "../middleware/log";

const router = Router();

/**
 * http://localhost:3000/items [GET]
 */

router.get("/items", [logMiddleware], getItems);
router.get("/item/:id", getItem);
router.post("/item", postItem);
router.put("/item/:id", updateItem);
router.delete("/item/:id", deleteItem);

export default router;
