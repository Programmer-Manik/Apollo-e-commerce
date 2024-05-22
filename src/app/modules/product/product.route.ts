import express from "express";
import { ProductControllers } from "./product.controller";
import { validate } from "../../middleware/validate";
import { productSchemaZodValidation } from "./product.zod.validation";

const router = express.Router();

//  controller function  call router function
router.post(
  "/",
  validate(productSchemaZodValidation),
  ProductControllers.createProduct
);
router.get("/", ProductControllers.getAllProducts);

router.get("/:productId", ProductControllers.getSingleProduct);

router.put(
  "/:productId",
  validate(productSchemaZodValidation),
  ProductControllers.updateSingleProduct
);

router.delete("/:productId", ProductControllers.deleteSingleProduct);

// router.get("/searchTerm", ProductControllers.searchSingleProduct);

export const productRoutes = router;
