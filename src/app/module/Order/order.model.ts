import { model, Schema } from "mongoose";
import { TOrder, TOrderedProduct } from "./order.interface";

const product = new Schema<TOrderedProduct>(
  {
    product: { type: Schema.Types.ObjectId, ref: "Product" },
    quantity: { type: Number },
  },
  { _id: false }
);

const orderSchema = new Schema<TOrder>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  address: { type: String, required: true },
  products: [product],
  payment: { type: String, enum: ["cashOnDelivery", "stripe"], required: true },
});

export const Order = model<TOrder>("Order", orderSchema);
