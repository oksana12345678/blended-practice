import { findUserByEmail } from "../services/users.js";
import { createUser, setUpSession } from "../services/users.js";
import { setUpCookies } from "../utils/setUpCookies.js";

import createHttpError from "http-errors";
import bcrypt from "bcrypt";

export const registerUser = async (req, res, next) => {
  const { email } = req.body;
  const user = await findUserByEmail(email);

  if (user) {
    throw createHttpError(409, "Email in use");
  }

  const newUser = await createUser(req.body);

  res.status(201).json({
    status: 201,
    message: "User created",
    data: {
      name: newUser.name,
      email: newUser.email,
    },
  });
};

export const loginUser = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await findUserByEmail(email);

  if (!user) {
    throw createHttpError(404, "User not found!");
  }

  const isEqual = await bcrypt.compare(password, user.password);

  if (!isEqual) {
    throw createHttpError(401, "User not found");
  }

  const session = await setUpSession(user._id);
  setUpCookies(res, session);

  res.status(200).json({
    status: 200,
    message: "Successfully logged in an user!",
    data: {
      accessToken: session.accessToken,
    },
  });
};

// Створіть роут POST /users/login для аутентифікації користувача. Тіло запиту має в себе включати наступні властивості:
// email - обовʼязково
// password - обовʼязково
// Обробка цього роута має включати:
// Реєстрацію роута в файлі src/routers/users.js
// Валідацію отриманих даних

// Опис контролера для цього роута в файлі src/controllers/users.js
// Створення сервісу в файлі src/services/users.js
// Переконайтеся, що користувач із такою поштою та паролем існує в системі, поверніть за допомогою бібліотеки createHttpError 401 помилку в іншому випадку.
// Якщо користувача за переданими даними було знайдено, то створіть для нього сессію, в яку запишіть згенеровані access та refresh токени. Стара сесія, за її наявності, має бути видалена. Вкажіть час життя 15 хв для access токену та 30 днів для refresh токену.
// Запишіть рефреш токен в cookies, а access токен поверніть в тілі відповіді.
// 8. Відповідь сервера, в разі успішного логіну, має бути зі статусом 200 і містити об’єкт з наступними властивостями:
// {
//  status: 200,
//  message: "Successfully logged in an user!",
//  data:

// }
