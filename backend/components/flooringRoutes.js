const express = require('express');
const router = express.Router();
const connection = require('../database');

// Get all flooring types
router.get('/types', (req, res) => {
    db.query('SELECT * FROM flooring_types', (err, results) => {
      if (err) return res.status(500).json({ error: err });
      res.json(results);
    });
  });
  
  // Get suppliers for flooring type
  router.get('/suppliers/:typeId', (req, res) => {
    const { typeId } = req.params;
    db.query(`
      SELECT s.* FROM suppliers s
      JOIN supplier_flooring_types sf ON s.id = sf.supplier_id
      WHERE sf.flooring_type_id = ?
    `, [typeId], (err, results) => {
      if (err) return res.status(500).json({ error: err });
      res.json(results);
    });
  });
  
  // Get ranges by supplier and flooring type
  router.get('/ranges/:typeId/:supplierId', (req, res) => {
    const { typeId, supplierId } = req.params;
    db.query(`
      SELECT * FROM ranges
      WHERE supplier_id = ? AND flooring_type_id = ?
    `, [supplierId, typeId], (err, results) => {
      if (err) return res.status(500).json({ error: err });
      res.json(results);
    });
  });
  
  // Get products by range
  router.get('/products/:rangeId', (req, res) => {
    const { rangeId } = req.params;
    db.query('SELECT * FROM products WHERE range_id = ?', [rangeId], (err, results) => {
      if (err) return res.status(500).json({ error: err });
      res.json(results);
    });
  });
  
  module.exports = router;