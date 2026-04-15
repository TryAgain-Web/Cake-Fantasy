// backend/routes/recipes.routes.js
const express = require('express');
const router = express.Router();
const {
  getAllRecipes,
  getRecipeById,
  createRecipe,
  updateRecipe,
  deleteRecipe
} = require('../controllers/recipes.controller');
const { verifyToken } = require('../middleware/auth.middleware');
const upload = require('multer')({ dest: 'uploads/' }); // Configure multer for file uploads

// Public routes
router.get('/', getAllRecipes);
router.get('/:id', getRecipeById);

// Protected admin routes
router.post('/', verifyToken, upload.single('image'), createRecipe);
router.put('/:id', verifyToken, upload.single('image'), updateRecipe);
router.delete('/:id', verifyToken, deleteRecipe);

module.exports = router;
