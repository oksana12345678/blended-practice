import User from "../db/User/auth.js";
import Session from "../db/Session/Session.js";
import bcrypt from "bcrypt";
import { createSession } from "../utils/createSession.js";

export const findUserByEmail = (email) =>
  User.findOne({
    email,
  });

export const createUser = async (userData) => {
  const { password } = userData;

  const hashedPassword = await bcrypt.hash(password, 10);

  return User.create({ ...userData, password: hashedPassword });
};

export const setUpSession = async (userId) => {
  await Session.deleteOne({
    userId,
  });

  return Session.create({
    ...createSession(),
    userId,
  });
};

export const findeSession =  (token) => 
   Session.findOne({ accessToken: token });
  
export const userById = (id) => User.findById(id );