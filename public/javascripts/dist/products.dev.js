"use strict";

function getProductsList() {
  return regeneratorRuntime.async(function getProductsList$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(fetch("/api/products-line", {
            "method": "GET"
          }).then(function (response) {
            return response.json();
          })["catch"](function (err) {
            console.error(err);
          }));

        case 2:
          return _context.abrupt("return", _context.sent);

        case 3:
        case "end":
          return _context.stop();
      }
    }
  });
}

function clickInEventProductList() {
  return regeneratorRuntime.async(function clickInEventProductList$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(document.querySelectorAll('.event-in-product').forEach(function (item) {
            item.addEventListener('click', function (item) {
              if (identify === "/") {
                if (item.target.classList.contains("active")) {
                  item.target.classList.remove("active");
                } else {
                  item.target.classList.add("active");
                }
              }

              eventProductWishlist(item.target.dataset.info);
            }, false);
          }));

        case 2:
        case "end":
          return _context2.stop();
      }
    }
  });
}

function buildUnitaryProduct(list) {
  return regeneratorRuntime.async(function buildUnitaryProduct$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return regeneratorRuntime.awrap(list.map(function (product) {
            var unitary = document.createElement('section');
            unitary.classList.add("container-product-unitary");
            var dataProduct = "\n      <img src=\"".concat(product.image, "\" alt=\"").concat(product.title, "\"/>\n      <p class=\"description-product\">").concat(product.title, "</p>\n      <p class=\"price\">").concat(product.price.toLocaleString('pt-br', {
              style: 'currency',
              currency: product.currencyId
            }), "</p>\n      ").concat(identify === "/" ? "\n        <section class=\"event-in-product ".concat(existsInWishlist(product.id) ? 'active' : '', "\" data-info='").concat(JSON.stringify(product), "'} >").concat(heart, "</section>\n      ") : "\n        <section class=\"event-in-product wishlist-page\" data-info='".concat(JSON.stringify(product), "'}>").concat(circleClose, "</section>\n      "), "\n    ");
            unitary.innerHTML = dataProduct;
            document.querySelector(".products-container").appendChild(unitary);
          }));

        case 2:
          clickInEventProductList();

        case 3:
        case "end":
          return _context3.stop();
      }
    }
  });
}

function populatingProductsList() {
  return regeneratorRuntime.async(function populatingProductsList$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return regeneratorRuntime.awrap(getProductsList().then(function (item) {
            buildUnitaryProduct(item.products);
          }));

        case 2:
          document.querySelector(".loading").outerHTML = "";

        case 3:
        case "end":
          return _context4.stop();
      }
    }
  });
}

function populatingWishlist() {
  return regeneratorRuntime.async(function populatingWishlist$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return regeneratorRuntime.awrap(getProductsWishlist().then(function (item) {
            if (!item || item.length === 0) {
              var empty = document.createElement('empty');
              var emptyWishlist = "\n        <p>:(<br>Sentimos muito, mas ainda n\xE3o existe itens na sua lista de desejos!</p>\n      ";
              empty.innerHTML = emptyWishlist;
              document.querySelector(".products-container").innerHTML = '';
              document.querySelector(".products-container").appendChild(empty);
            } else {
              document.querySelector(".products-container").innerHTML = '';
              buildUnitaryProduct(getLocasStorage());
            }
          }));

        case 2:
          if (document.querySelector(".loading")) {
            document.querySelector(".loading").outerHTML = "";
          }

        case 3:
        case "end":
          return _context5.stop();
      }
    }
  });
}