import authRouter from "./auth.router";
import itemRouter from "./item.router";
import orderRouter from "./order.router";
import { fileRouter } from "./upload.router";

export { itemRouter, authRouter, orderRouter, fileRouter };

/*import { Router } from "express";
import { readdirSync } from "fs";
import orderRouter from './order.router';

const PATH_ROUTER = `${__dirname}`;
const router = Router();

const cleanFileName = (fileName: string) => {
  const file = fileName.split(".").shift();
  return file;
};
readdirSync(PATH_ROUTER).filter((fileName) => {
  const cleanName = cleanFileName(fileName);
  if (cleanName !== "index") {
    import(`./${cleanName}`).then((moduleRouter) => {
      console.log(`${cleanName} que esta pasando`);

      router.use(`/${cleanName}`, moduleRouter.router);
    });
  }
});

export { router };*/
