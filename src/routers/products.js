import { Router } from "express";
import { getAllProducts } from "../controllers/products.js";

const router = Router();

router.get("/", getAllProducts);
export default router;
