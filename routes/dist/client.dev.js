"use strict";

var express = require('express');

var router = express.Router();
router.get('/', function _callee(req, res) {
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          res.render('index', {
            title: 'MagaNets | Lista de Produtos',
            breadcrumb: ["Home"]
          });

        case 1:
        case "end":
          return _context.stop();
      }
    }
  });
});
router.get('/wishlist', function _callee2(req, res) {
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          res.render('index', {
            title: 'MagaNets | Lista de Desejos',
            breadcrumb: ["Home", "Lista de Desejos"]
          });

        case 1:
        case "end":
          return _context2.stop();
      }
    }
  });
});
module.exports = router;