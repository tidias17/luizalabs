"use strict";

function getLocasStorage() {
  return JSON.parse(localStorage.getItem("magaNetsWishlistProducts"));
}

function existsInWishlist(id) {
  var verify = getLocasStorage().find(function (element) {
    return element.id === id;
  });

  if (verify === undefined) {
    return false;
  }

  return true;
}

function getProductsWishlist() {
  return regeneratorRuntime.async(function getProductsWishlist$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (!(getLocasStorage() === null || getLocasStorage().length === 0)) {
            _context.next = 4;
            break;
          }

          return _context.abrupt("return", []);

        case 4:
          return _context.abrupt("return", localStorage.getItem("magaNetsWishlistProducts"));

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
}

function eventProductWishlist(item) {
  var parse, json;
  return regeneratorRuntime.async(function eventProductWishlist$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          parse = JSON.parse(item);
          json = [];

          if (getLocasStorage() === null) {
            json.push(parse);
          } else {
            if (getLocasStorage().find(function (element) {
              return element.id === parse.id;
            })) {
              json = getLocasStorage().filter(function (element) {
                return element.id !== parse.id;
              });
            } else {
              json = getLocasStorage();
              json.push(parse);
            }
          }

          _context2.next = 5;
          return regeneratorRuntime.awrap(localStorage.setItem('magaNetsWishlistProducts', JSON.stringify(json)));

        case 5:
          if (identify === "/wishlist") {
            populatingWishlist();
          }

        case 6:
        case "end":
          return _context2.stop();
      }
    }
  });
}