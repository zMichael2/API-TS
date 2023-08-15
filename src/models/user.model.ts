import { Schema, Types, model, Model } from "mongoose";
import { User } from "../interfaces/user.interface";

const UserSchema = new Schema<User>(
  {
    name: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
      default: "description null",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
/**-----------------model ( "nombre de la base de datos", "schema") */
const UserModel = model("users", UserSchema);
export default UserModel;
