import express from 'express';

import { getProducts } from '../controller/product-controller';

const router = express.Router();

router.get('/products', getProducts);

export default router;
