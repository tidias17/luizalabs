async function getProductsList() {
  return await fetch("/api/products-line", {
    "method": "GET"
  })
  .then(response => {
    return response.json();
  })
  .catch(err => {
    console.error(err);
  });
}

async function clickInEventProductList() {
  await document.querySelectorAll('.event-in-product').forEach((item) => {
    item.addEventListener('click', (item) => {
      if(identify === "/") {     
        if(item.target.classList.contains("active")) {
          item.target.classList.remove("active");
        } else {
          item.target.classList.add("active");
        }
      }
      eventProductWishlist(item.target.dataset.info)
    }, false)
})
}

async function buildUnitaryProduct(list) {
  await list.map((product) => {
    let unitary = document.createElement('section');
    unitary.classList.add("container-product-unitary")

    let dataProduct = `
      <img src="${product.image}" alt="${product.title}"/>
      <p class="description-product">${product.title}</p>
      <p class="price">${product.price.toLocaleString('pt-br',{style: 'currency', currency: product.currencyId})}</p>
      ${(identify === "/") ? `
        <section class="event-in-product ${(existsInWishlist(product.id)) ? 'active': ''}" data-info='${JSON.stringify(product)}'} >${heart}</section>
      ` : `
        <section class="event-in-product wishlist-page" data-info='${JSON.stringify(product)}'}>${circleClose}</section>
      `}
    `;

    unitary.innerHTML = dataProduct;

    document.querySelector(".products-container").appendChild(unitary);
  });
  clickInEventProductList();
}

async function populatingProductsList() {
  await getProductsList().then(item => {
    buildUnitaryProduct(item.products);
  })


  document.querySelector(".loading").outerHTML = "";
}

async function populatingWishlist() {
  await getProductsWishlist().then(item => {
    if(!item || item.length === 0) {
      let empty = document.createElement('empty');
      let emptyWishlist = `
        <p>:(<br>Sentimos muito, mas ainda não existe itens na sua lista de desejos!</p>
      `;
      empty.innerHTML = emptyWishlist;
      document.querySelector(".products-container").innerHTML = '';
      document.querySelector(".products-container").appendChild(empty);
    } else {
      document.querySelector(".products-container").innerHTML = '';
      buildUnitaryProduct(getLocasStorage());
    }
  });
  if(document.querySelector(".loading")) {
    document.querySelector(".loading").outerHTML = "";
  }
}