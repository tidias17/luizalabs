const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  res.render('index', {
    title: 'MagaNets | Lista de Produtos',
    breadcrumb: ["Home"],
  });
});

router.get('/wishlist', async (req, res) => {
  res.render('index', {
    title: 'MagaNets | Lista de Desejos',
    breadcrumb: ["Home", "Lista de Desejos"],
  });
});

module.exports = router;
