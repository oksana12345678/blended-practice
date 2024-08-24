import { createUser } from "../services/users.js";
// import { setUpCookies } from "../utils/setUpCookies.js";

import createHttpError from "http-errors";
import { findUserByEmail } from "../services/users.js";
// import bcrypt from "bcrypt";

export const registerUser = async (req, res) => {
  const { email } = req.body;
  const user = await findUserByEmail(email);
  if (user) {
    throw createHttpError(409, "Email in use");
  }
  const newUser = await createUser(req.body);
  res.status(201).json({
    user: {
      name: newUser.name,
      email: newUser.email,
    },
    token: newUser.token,
  });
};

// export const loginUser = async (req, res) => {
//   const { email, password } = req.body;
//   const user = await findUserByEmail(email);

//   if (!user) {
//     throw createHttpError(404, "User not found!");
//   }

//   const isEqual = await bcrypt.compare(password, user.password);

//   if (!isEqual) {
//     throw createHttpError(401, "User not found");
//   }

//   const session = await setUpSession(user._id);
//   setUpCookies(res, session);

//   res.status(200).json({
//     status: 200,
//     message: "Successfully logged in an user!",
//     data: {
//       accessToken: session.accessToken,
//     },
//   });
// };
