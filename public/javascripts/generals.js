const identify = window.location.pathname
window.onload = (e) => {
  if(identify === "/") {
    populatingProductsList()
  }
  if(identify === "/wishlist") {
    populatingWishlist()
  }
}