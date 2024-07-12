import httpStatus from "http-status";
import { startSession } from "mongoose";
import { TOrder } from "./order.interface";
import { Product } from "../Product/product.model";
import AppError from "../../errors/AppError";
import { Order } from "./order.model";

const createOrderIntoDB = async (payload: TOrder) => {
  const session = await startSession();
  session.startTransaction();

  try {
    for (const item of payload.products) {
      const product = await Product.findById(item.product).session(session);
      if (!product) {
        throw new AppError(httpStatus.NOT_FOUND, "Product not found");
      }
      if (item.quantity > product.availableQuantity) {
        throw new AppError(
          httpStatus.BAD_REQUEST,
          `Requested quantity for product ${product.name} exceeds available stock`
        );
      }
    }

    // Create the order if all products exist and have sufficient quantity
    const result = await Order.create([payload], { session });

    if (!result.length) {
      throw new AppError(httpStatus.BAD_REQUEST, "Failed to create order");
    }

    for (const item of payload.products) {
      await Product.findByIdAndUpdate(
        item.product,
        { $inc: { availableQuantity: -item.quantity } },
        { session }
      );
    }

    // Commit the transaction
    await session.commitTransaction();
    await session.endSession();

    return result;
  } catch (error) {
    // Abort the transaction in case of error
    await session.abortTransaction();
    await session.endSession();
    throw error;
  }
};

export default createOrderIntoDB;

export const OrderServices = { createOrderIntoDB };
