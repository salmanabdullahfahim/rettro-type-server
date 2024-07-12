import { Router } from "express";

import { ProductRoutes } from "../module/Product/product.route";
import { OrderRoutes } from "../module/Order/order.route";

const router = Router();

const moduleRoutes = [
  {
    path: "/products",
    route: ProductRoutes,
  },
  {
    path: "/orders",
    route: OrderRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route)); // This will automatically loop your routes that you will add in the moduleRoutes array

export default router;
