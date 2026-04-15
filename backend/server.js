// backend/server.js
// ============================================================
// Cake Fantasy - Express Backend Server
// ============================================================
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// ── Middleware ───────────────────────────────────────────────
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:4200',
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve uploaded images statically
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

// ── Routes ──────────────────────────────────────────────────
app.use('/api/admin', require('./routes/auth.routes'));
app.use('/api/products', require('./routes/products.routes'));
app.use('/api/recipes', require('./routes/recipes.routes'));

// Health check
app.get('/api/health', (req, res) => res.json({ status: 'OK', timestamp: new Date() }));

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  if (err.code === 'LIMIT_FILE_SIZE') {
    return res.status(400).json({ message: 'File too large. Max size is 5MB.' });
  }
  res.status(500).json({ message: err.message || 'Internal server error.' });
});

app.listen(PORT, () => {
  console.log(`🎂 Cake Fantasy API running on http://localhost:${PORT}`);
});

module.exports = app;
