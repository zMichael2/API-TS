import { Schema, Types, model, Model } from "mongoose";
import { User } from "../interfaces/user.interface";
import { storage } from "../interfaces/storage.interface";

const StorageSchema = new Schema<storage>(
  {
    fileName: {
      type: String,
    },
    idUser: {
      type: String,
    },
    path: {
      type: String,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
/**-----------------model ( "nombre de la base de datos", "schema") */
const StorageModel = model("storage", StorageSchema);
export default StorageModel;
