import Product from '../db/Product.js';

export const getAllProductsService = () => Product.find();
