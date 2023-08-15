import { encrypt, verified } from "../helpers/bcrypt.handle";
import { generateToken } from "../helpers/jwt.handle";
import { Auth } from "../interfaces/auth.interface";
import { User } from "../interfaces/user.interface";
import UserModel from "../models/user.model";

const registerNewUser = async (authUser: User) => {
  const { email, password, name } = authUser;
  const checkIs = await UserModel.findOne({ email });
  if (checkIs) return "ALREADY_USER";
  const passHash = await encrypt(password);
  const registerNewUser = await UserModel.create({
    email,
    password: passHash,
    name,
  });
  return registerNewUser;
};

const loginUser = async (authUser: Auth) => {
  const { email, password } = authUser;
  const checkIs = await UserModel.findOne({ email });
  if (!checkIs) return "NOT_FOUND_USER";

  const passwordHash = checkIs.password; //encriptado q viene de la pase de datos
  const isCorrect = await verified(password, passwordHash);

  if (!isCorrect) return "PASSWORD_INCORRECT";
  const token = generateToken(email);

  const data = {
    token,
    user: checkIs,
  };

  return data;
};

export { registerNewUser, loginUser };
