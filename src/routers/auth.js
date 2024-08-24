import { Router } from "express";
import { validateBody } from "../utils/validateBody.js";
import { createUserSchema, loginUserSchema } from "../validation/users.js";
import {
  loginUser,
  logout,
  refreshUser,
  registerUser,
} from "../controllers/users.js";
import { ctrlWrapper } from "../utils/ctrlWrapper.js";
import { checkToken } from "../middlewares/checktoken.js";

const router = Router();

router.post(
  "/signup",
  validateBody(createUserSchema),
  ctrlWrapper(registerUser)
);

router.post("/login", validateBody(loginUserSchema), ctrlWrapper(loginUser));

router.post("/logout", checkToken, ctrlWrapper(logout));

router.get("/current", checkToken, ctrlWrapper(refreshUser));

export default router;
