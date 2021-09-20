"use strict";

var identify = window.location.pathname;

window.onload = function (e) {
  if (identify === "/") {
    populatingProductsList();
  }

  if (identify === "/wishlist") {
    populatingWishlist();
  }
};