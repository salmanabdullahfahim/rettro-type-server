import { Types } from "mongoose";

export type TOrderedProduct = {
  product: Types.ObjectId;
  quantity: number;
};

export type TPaymentMethod = "cashOnDelivery" | "stripe";

export type TOrder = {
  name: string;
  email: string;
  phoneNumber: string;
  address: string;
  products: [TOrderedProduct];
  payment: TPaymentMethod;
};
