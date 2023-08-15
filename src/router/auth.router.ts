import { Router } from "express";
import { loginCtrl, registerCtrl } from "../controllers/auth.controller";

const authRouter = Router();

/**
 * http://localhost:3000/register [POST]
 */

authRouter.post("/register", registerCtrl);
authRouter.post("/login", loginCtrl);

export default authRouter;
