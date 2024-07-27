import createHttpError from "http-errors";
import {
  getAllProductsService,
  getProductByIdService,
  createProductService,
  deleteProductService,
} from "../services/products.js";

export const getAllProducts = async (req, res) => {
  const products = await getAllProductsService();
  res.status(200).json({
    message: "Successfully found products!",
    data: products,
    status: 200,
  });
};
export const getProductById = async (req, res) => {
  const { id } = req.params;
  const product = await getProductByIdService(id);
  if (!product) {
    throw createHttpError(404, "Product not found");
  }
  res.status(200).json({
    message: "Successfully found product!",
    data: product,
    status: 200,
  });
};

export const createProduct = async (req, res) => {
  const product = await createProductService(req.body);

  res.status(201).json({
    status: 201,
    message: "Successfully created a product!",
    data: product,
  });
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  const product = await deleteProductService(id);
  if (!product) {
    throw createHttpError(404, "Product not found");
  }

  res.sendStatus(204);
};
