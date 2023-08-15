import { Response } from "express";
import { handleHttp } from "../helpers/error.handle";
import { registerUpload } from "../services/storage.service";
import { RequestExt } from "../interfaces/req-ext.interface";
import { storage } from "../interfaces/storage.interface";

const getFile = async (req: RequestExt, res: Response) => {
  try {
    const { user, file } = req;
    console.log(user);

    const dataToRegister: storage = {
      fileName: `${file?.filename}`,
      idUser: `${user?.email}`, //aca hice una cosa rara con el email, en la interfas tambien cambie {id: string } por email OJO
      path: `${file?.path}`,
    };
    const response = await registerUpload(dataToRegister);
    res.send(response);
  } catch (e) {
    handleHttp(res, "ERROR_GET_BLOG");
  }
};

export { getFile };
