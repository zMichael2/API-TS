import { storage } from "../interfaces/storage.interface";
import StorageModel from "../models/storage.model";

const registerUpload = async ({ fileName, idUser, path }: storage) => {
  const responseItem = await StorageModel.create({ fileName, idUser, path });
  return responseItem;
};

export { registerUpload };
