import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { ProductServices } from "./product.services";

// add product
const addProduct = catchAsync(async (req, res) => {
  const product = req.body;

  const result = await ProductServices.addProductIntoDB(product);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Product added successfully",
    data: result,
  });
});

// get all product
const getAllProduct = catchAsync(async (req, res) => {
  const result = await ProductServices.getAllProductFromDB(req.query);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Product fetched successfully",
    data: result,
  });
});

// get single product
const getSingleProduct = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await ProductServices.getSingleProductFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Product fetched successfully",
    data: result,
  });
});

// update product
const updateProduct = catchAsync(async (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;

  const result = await ProductServices.updateProductFromBD(id, updatedData);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Product updated successfully",
    data: result,
  });
});

// delete product
const deleteProduct = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await ProductServices.deleteProductFromDB(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Product deleted successfully",
    data: result,
  });
});

export const ProductController = {
  addProduct,
  getAllProduct,
  getSingleProduct,
  updateProduct,
  deleteProduct,
};
