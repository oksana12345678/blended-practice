import { Router } from "express";
import {
  getAllProducts,
  getProductById,
  createProduct,
  deleteProduct,
} from "../controllers/products.js";
import { ctrlWrapper } from "../utils/ctrlWrapper.js";
import { validateBody } from "../utils/validateBody.js";
import { createProductSchema } from "../validation/product.js";
import { validateId } from "../middlewares/validateId.js";

const router = Router();

router.get("/", ctrlWrapper(getAllProducts));

router.get("/:id", validateId, ctrlWrapper(getProductById));

router.post(
  "/",
  validateBody(createProductSchema),
  ctrlWrapper(createProduct)
);

router.delete(
  "/:id",
  validateId,
  ctrlWrapper(deleteProduct)
);

export default router;
