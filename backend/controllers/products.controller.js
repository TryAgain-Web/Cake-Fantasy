// backend/controllers/products.controller.js
const db = require('../config/db');
const path = require('path');

// GET /api/products
const getAllProducts = async (req, res) => {
  try {
    const [products] = await db.query('SELECT * FROM products ORDER BY created_at DESC');
    res.json(products);
  } catch (err) {
    console.error('Get products error:', err);
    res.status(500).json({ message: 'Failed to fetch products.' });
  }
};

// GET /api/products/:id
const getProductById = async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM products WHERE id = ?', [req.params.id]);
    if (rows.length === 0) return res.status(404).json({ message: 'Product not found.' });
    res.json(rows[0]);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch product.' });
  }
};

// POST /api/products  (admin only)
const createProduct = async (req, res) => {
  const { name, description, price } = req.body;

  if (!name || !price) {
    return res.status(400).json({ message: 'Name and price are required.' });
  }

  if (isNaN(price) || Number(price) <= 0) {
    return res.status(400).json({ message: 'Price must be a positive number.' });
  }

  const image_url = req.file
    ? `/uploads/${req.file.filename}`
    : null;

  try {
    const [result] = await db.query(
      'INSERT INTO products (name, description, price, image_url) VALUES (?, ?, ?, ?)',
      [name, description || null, Number(price), image_url]
    );
    const [newProduct] = await db.query('SELECT * FROM products WHERE id = ?', [result.insertId]);
    res.status(201).json(newProduct[0]);
  } catch (err) {
    console.error('Create product error:', err);
    res.status(500).json({ message: 'Failed to create product.' });
  }
};

// PUT /api/products/:id  (admin only)
const updateProduct = async (req, res) => {
  const { name, description, price } = req.body;
  const { id } = req.params;

  if (!name || !price) {
    return res.status(400).json({ message: 'Name and price are required.' });
  }

  try {
    const [existing] = await db.query('SELECT * FROM products WHERE id = ?', [id]);
    if (existing.length === 0) return res.status(404).json({ message: 'Product not found.' });

    const image_url = req.file
      ? `/uploads/${req.file.filename}`
      : existing[0].image_url;

    await db.query(
      'UPDATE products SET name = ?, description = ?, price = ?, image_url = ? WHERE id = ?',
      [name, description || null, Number(price), image_url, id]
    );

    const [updated] = await db.query('SELECT * FROM products WHERE id = ?', [id]);
    res.json(updated[0]);
  } catch (err) {
    console.error('Update product error:', err);
    res.status(500).json({ message: 'Failed to update product.' });
  }
};

// DELETE /api/products/:id  (admin only)
const deleteProduct = async (req, res) => {
  try {
    const [existing] = await db.query('SELECT * FROM products WHERE id = ?', [req.params.id]);
    if (existing.length === 0) return res.status(404).json({ message: 'Product not found.' });

    await db.query('DELETE FROM products WHERE id = ?', [req.params.id]);
    res.json({ message: 'Product deleted successfully.' });
  } catch (err) {
    console.error('Delete product error:', err);
    res.status(500).json({ message: 'Failed to delete product.' });
  }
};

module.exports = { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct };
