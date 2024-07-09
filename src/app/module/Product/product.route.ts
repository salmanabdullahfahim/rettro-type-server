import { Router } from "express";
import validateRequest from "../../middlewares/validateRequest";
import { ProductController } from "./product.controller";
import { ProductValidation } from "./product.validation";

const router = Router();

// add product route
router.post(
  "/add-product",
  validateRequest(ProductValidation.addProductValidationSchema),
  ProductController.addProduct
);

// get all product route
router.get("/", ProductController.getAllProduct);

// get single product route
router.get("/:id", ProductController.getSingleProduct);

// update product route
router.patch(
  "/:id",
  validateRequest(ProductValidation.updateProductValidationSchema),
  ProductController.updateProduct
);

// delete product route
router.delete("/:id", ProductController.deleteProduct);

export const ProductRoutes = router;
