import { TProduct } from "./product.interface";
import { Product } from "./product.model";

// add product
const addProductIntoDB = async (product: TProduct): Promise<TProduct> => {
  const result = await Product.create(product);

  return result;
};

// get all product
const getAllProductFromDB = async () => {
  const result = await Product.find();

  return result;
};

// get single product
const getSingleProductFromDB = async (id: string) => {
  const result = await Product.findById(id);

  return result;
};

// delete product
const deleteProductFromDB = async (id: string) => {
  const result = await Product.findByIdAndDelete(id);

  return result;
};

export const ProductServices = {
  addProductIntoDB,
  getAllProductFromDB,
  getSingleProductFromDB,
  deleteProductFromDB,
};
