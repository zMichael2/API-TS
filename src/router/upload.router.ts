import { Router } from "express";
import { getFile } from "../controllers/upload.controller";
import multerMiddleware from "../middleware/file";
import { checkJwt } from "../middleware/session";

const fileRouter = Router();

/**
 * .array = mucho archivos
 * .single = un archivo
 */
fileRouter.post(
  "/file",
  [checkJwt],
  multerMiddleware.single("myfile"),
  getFile
);

export { fileRouter };
