import Product from "../db/Product.js";

export const getAllProductsService = () => Product.find();

export const getProductByIdService = (productId) =>
  Product.findById(productId);

export const createProductService = (productData) =>
  Product.create(productData);

export const deleteProductService = (id) =>
  Product.findByIdAndDelete(id);
