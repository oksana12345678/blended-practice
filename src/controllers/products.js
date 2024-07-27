import {
  getAllProductsService,
  getProductByIdService,
  createProductService,
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

export const createProduct = async (req, res) => {
  const product = await createProductService(req.body);

  res.status(201).json({
    status: 201,
    message: "Successfully created a product!",
    data: product,
   });

};