import { Router } from "express";
import { validateBody } from "../utils/validateBody.js";
import { createUserSchema } from "../validation/users.js";
import { registerUser } from "../controllers/users.js";
import { ctrlWrapper } from "../utils/ctrlWrapper.js";

const router = Router();

router.post(
  "/signup",
  validateBody(createUserSchema),
  ctrlWrapper(registerUser)
);
// router.post("/login", validateBody(loginUserSchema), ctrlWrapper(loginUser));

export default router;
