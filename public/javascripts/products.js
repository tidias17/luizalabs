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
    let unitary = document.createElement('unitary');

    let dataProduct = `
      <div class="container-product-unitary">
        <p>${product.title}</p>
        ${(identify === "/") ? `
          <p class="event-in-product ${(existsInWishlist(product.id)) ? 'active': ''}" data-info='${JSON.stringify(product)}'}>Favoritar</p>
        ` : `
          <p class="event-in-product" data-info='${JSON.stringify(product)}'}>Desfavorito</p>
        `}
      </div>
    `;

    unitary.innerHTML = dataProduct;

    document.querySelector(".productsContainer").appendChild(unitary);
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
      document.querySelector(".productsContainer").innerHTML = '';
      document.querySelector(".productsContainer").appendChild(empty);
    } else {
      document.querySelector(".productsContainer").innerHTML = '';
      buildUnitaryProduct(getLocasStorage());
    }
  });
  if(document.querySelector(".loading")) {
    document.querySelector(".loading").outerHTML = "";
  }
}