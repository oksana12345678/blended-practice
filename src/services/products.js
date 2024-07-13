import Product from "../db/Product.js";

export const getAllProductsService = () => Product.find();

export const getProductByIdService = (productId) => Product.findById(productId);
