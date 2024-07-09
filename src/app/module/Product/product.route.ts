import { Router } from "express";
import validateRequest from "../../middlewares/validateRequest";
import { ProductController } from "./product.controller";
import { ProductValidation } from "./product.validation";

const router = Router();

router.post(
  "/add-product",
  validateRequest(ProductValidation.addProductValidationSchema),
  ProductController.addProduct
);

router.get("/", ProductController.getAllProduct);

export const ProductRoutes = router;
