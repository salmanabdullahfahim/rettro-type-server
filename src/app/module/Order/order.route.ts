import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { orderValidations } from "./order.validation";
import { orderControllers } from "./order.controller";

const router = express.Router();

// create order
router.post(
  "/create-order",
  validateRequest(orderValidations.orderValidationSchema),
  orderControllers.createOrder
);

export const OrderRoutes = router;
