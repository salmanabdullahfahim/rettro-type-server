import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { Product } from "./product.model";

const addProduct = catchAsync(async (req, res) => {
  const product = req.body;

  const result = await Product.addProductIntoDB(product);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Product added successfully",
    data: result,
  });
});

export const ProductController = {
  addProduct,
};
