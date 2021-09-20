function getLocasStorage() {
  return JSON.parse(localStorage.getItem("magaNetsWishlistProducts"));
}

function existsInWishlist(id) {
  if(getLocasStorage() !== null && getLocasStorage().length !== 0) {
    const verify = getLocasStorage().find((element) => {return element.id === id});
    if(verify === undefined) {
      return false;
    }
    return true;
  }
}

async function getProductsWishlist() {
  if(getLocasStorage() === null || getLocasStorage().length === 0) {
    return [];
  } else {
    return localStorage.getItem("magaNetsWishlistProducts");
  }
}

async function eventProductWishlist(item) {
  const parse = JSON.parse(item);
  let json = [];
  if(getLocasStorage() === null) {
    json.push(parse);
  } else {
    if(getLocasStorage().find((element) => {return element.id === parse.id})) {
      json = getLocasStorage().filter((element) => {return element.id !== parse.id})
    } else {
      json = getLocasStorage();
      json.push(parse);
    }
  }
  await localStorage.setItem('magaNetsWishlistProducts', JSON.stringify(json));
  if(identify === "/wishlist") {     
    populatingWishlist();
  }
}
