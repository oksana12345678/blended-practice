import { Router } from "express";
import {
  getAllProducts,
  getProductById,
  createProduct,
} from "../controllers/products.js";
import { ctrlWrapper } from "../utils/ctrlWrapper.js";
import { validateBody } from "../utils/validateBody.js";
import { createProductSchema } from "../validation/product.js";

const router = Router();

router.get("/", ctrlWrapper(getAllProducts));

router.get("/:productId", ctrlWrapper(getProductById));

router.post("/", validateBody(createProductSchema), ctrlWrapper(createProduct));

export default router;

// Створіть роут POST /products для створення нового продукту. Тіло запиту має в себе включати наступні властивості:
// name - обов’язково;
// price - обов’язково;
// category - не обов’язково;
// description - не обов’язково;
// Обробка цього роута має включати:
// Реєстрацію роута в файлі src/routers/products.js
// Опис контролера для цього роута в файлі src/controllers/products.js
// Створення сервісу в файлі src/services/products.js
// При вдалому запиті відповідь сервера має містити об’єкт з наступними властивостями:
//    {
//        status: 201,
//        message: "Successfully created a product!",
//        data: <об'єкт створеного продукту>
//    }
