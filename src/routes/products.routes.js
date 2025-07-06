import express from 'express';
import { getAllProducts, getProductById, createProduct, deleteProduct } from '../controllers/products.controller.js';
import authMiddleware from '../middlewares/auth.middleware.js';

const router = express.Router();

router.get('/products', authMiddleware, getAllProducts);
router.get('/products/:id', authMiddleware, getProductById);
router.post('/products/create', authMiddleware, createProduct);
router.delete('/products/:id', authMiddleware, deleteProduct);

export default router;
