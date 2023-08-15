import { Request, Response } from "express";
import { loginUser, registerNewUser } from "../services/auth.service";

const registerCtrl = async (req: Request, res: Response) => {
  const { body } = req;
  const responseUser = await registerNewUser(body);
  res.send(responseUser);
};

const loginCtrl = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const responseUser = await loginUser({ email, password });
  res.send(responseUser);
};

export { registerCtrl, loginCtrl };
