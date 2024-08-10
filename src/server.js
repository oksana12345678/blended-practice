import express from "express";
import cors from "cors";
import productRouter from "./routers/products.js";
import { errorHandler } from "./middlewares/errorHandler.js";
import authRouter from "./routers/auth.js";

import { env } from "./utils/env.js";
import { notFoundHandler } from "./middlewares/notFound.js";

const PORT = Number(env("PORT", "3000"));

export const setupServer = () => {
  const app = express();

  app.use(express.json());
  app.use(cors());

  app.use("/users", authRouter);
  app.use("/products", productRouter);

  app.use("*", notFoundHandler);
  app.use(errorHandler);

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};
