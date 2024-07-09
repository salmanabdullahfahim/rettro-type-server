import QueryBuilder from "../../builder/QueryBuilder";
import { productSearchableFields } from "./product.constant";
import { TProduct } from "./product.interface";
import { Product } from "./product.model";

// add product
const addProductIntoDB = async (product: TProduct): Promise<TProduct> => {
  const result = await Product.create(product);

  return result;
};

// get all product
const getAllProductFromDB = async (query: Record<string, unknown>) => {
  // const result = await Product.find().sort({ createdAt: -1 });

  const productQuery = new QueryBuilder(Product.find(), query)
    .search(productSearchableFields)
    .filter()
    .sort();

  const result = await productQuery.modelQuery;

  return result;
};

// get single product
const getSingleProductFromDB = async (id: string) => {
  const result = await Product.findById(id);

  return result;
};

// update product
const updateProductFromBD = async (id: string, payload: Partial<TProduct>) => {
  const result = await Product.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });

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
  updateProductFromBD,
  deleteProductFromDB,
};
