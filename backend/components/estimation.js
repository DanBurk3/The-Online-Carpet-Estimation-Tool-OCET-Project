const express = require('express');
const router = express.Router();
const connection = require('../database');

function calculateCarpet(length, width, carpetWidth) {
  return Math.ceil(length / carpetWidth) * carpetWidth * width;
}

router.post('/', (req, res) => {
  const { length, width, carpetType } = req.body;

  connection.query(
    'SELECT price, width FROM carpets WHERE type = ?',
    [carpetType],
    (err, results) => {
      if (err) return res.status(500).json({ error: 'Database error' });
      
      if (results.length === 0) return res.status(404).json({ error: 'Carpet type not found' });

      const carpet = results[0];
      const carpetNeeded = calculateCarpet(length, width, carpet.width);
      const cost = carpetNeeded * carpet.price;

      res.json({ carpetNeeded, cost });
    }
  );
});

module.exports = router;
