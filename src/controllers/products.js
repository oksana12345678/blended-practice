import {
  getAllProductsService,
  getProductByIdService,
} from "../services/products.js";

export const getAllProducts = async (req, res, next) => {
    const products = await getAllProductsService();
    res.status(200).json({
      message: "Successfully found products!",
      data: products,
      status: 200,
    });
};
export const getProductById = async (req, res, next) => {
  const { productId } = req.params;
    const product = await getProductByIdService(productId);
    if (!product) {
      res.status(404).json({
        message: "Product not found",
      });
      return;
    }
    res.status(200).json({
      message: "Successfully found product!",
      data: product,
      status: 200,
    });
};

export const createProduct =  () => {
// name - обов’язково;
// price - обов’язково;
// category - не обов’язково;
// description - не обов’язково;
};