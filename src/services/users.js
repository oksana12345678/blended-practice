import User from "../db/User/auth.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { env } from "../utils/env.js";
export const findUserByEmail = (email) =>
  User.findOne({
    email,
  });

const updateUserWithToken = (userId) => {
  const token = jwt.sign(
    {
      userId,
    },
    env("SECRET_JWT")
  );
  return User.findByIdAndUpdate(userId, { token }, { new: true });
};

export const createUser = async (userData) => {
  const { password } = userData;

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({ ...userData, password: hashedPassword });

  return updateUserWithToken(user._id);
};

// export const userById = (id) => User.findById(id );
