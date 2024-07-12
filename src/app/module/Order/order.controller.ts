import httpStatus from "http-status";

import { OrderServices } from "./order.services";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";

// create order
const createOrder = catchAsync(async (req, res) => {
  const result = await OrderServices.createOrderIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Order created successfully",
    data: result,
  });
});

export const orderControllers = {
  createOrder,
};
