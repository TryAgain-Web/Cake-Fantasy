// backend/routes/products.routes.js
const express = require('express');
const router = express.Router();
const {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
} = require('../controllers/products.controller');
const { verifyToken } = require('../middleware/auth.middleware');
const upload = require('multer')({ dest: 'uploads/' }); // Configure multer for file uploads

// Public routes
router.get('/', getAllProducts);
router.get('/:id', getProductById);

// Protected admin routes
router.post('/', verifyToken, upload.single('image'), createProduct);
router.put('/:id', verifyToken, upload.single('image'), updateProduct);
router.delete('/:id', verifyToken, deleteProduct);

module.exports = router;
