import { Request, Response } from "express";
import { handleHttp } from "../helpers/error.handle";
import { RequestExt } from "../interfaces/req-ext.interface";

const getOrders = (req: RequestExt, res: Response) => {
  try {
    res.send({ Data: "ESTO SOLO LO VE PERSONA CON JWT", user: req.user });
  } catch (e) {
    handleHttp(res, "ERROR_GET_BLOG");
  }
};

export { getOrders };
