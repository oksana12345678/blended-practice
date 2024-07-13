import express from "express";
import cors from "cors";
import router from "./routers/products.js";

import { env } from "./utils/env.js";

const PORT = Number(env("PORT", "3000"));

export const setupServer = () => {
  const app = express();

  app.use(express.json());
  app.use(cors());
  app.use("/products", router);
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};
