import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../helpers/jwt.handle";
import { JwtPayload } from "jsonwebtoken";

export interface RequestExt extends Request {
  user?: string | JwtPayload;
}
const checkJwt = (req: RequestExt, res: Response, next: NextFunction) => {
  try {
    const jwtByUser = req.headers.authorization || "";
    const isUser = verifyToken(`${jwtByUser}`) as { id: string }; // { id: string } ni sé

    if (!isUser) {
      res.status(404).send("NO HAY JWT VALIDO");
    }

    req.user = isUser;
    //console.log(isUser);

    next();
  } catch (error) {
    res.status(402).send("SESSION_NO VALIDA");
  }
};

export { checkJwt };
