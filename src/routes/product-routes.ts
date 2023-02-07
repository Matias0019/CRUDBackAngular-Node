import { Router } from "express";
import { deleteProduct, getProduct, getProducts, saveProduct, updateProduct } from "../controllers/product-controller";
import { schemaValidation, validatorUser } from "../middlewares/schemaValidator.middleware";
import { createProductSchema, updateProductSchema } from "../schemas/product.schema";

const router = Router();

router.get('/', getProducts);
router.get('/:id', getProduct);
router.delete('/:id', deleteProduct);
// router.post('/', schemaValidation(createProductSchema), saveProduct);
router.put('/:id', schemaValidation(updateProductSchema), updateProduct);

router.post('/', validatorUser,saveProduct);

export default router;