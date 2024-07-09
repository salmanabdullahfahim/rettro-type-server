import { TProduct } from "./product.interface";
import { Product } from "./product.model";

const addProductIntoDB = async (product: TProduct): Promise<TProduct> => {
  const result = await Product.create(product);

  return result;
};

const getAllProduct = async () => {
  const result = await Product.find();

  return result;
};

export const ProductServices = {
  addProductIntoDB,
  getAllProduct,
};
