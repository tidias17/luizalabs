async function renderBreadcrumb() {
  const itens = [];
  if(identify === "/") {
    itens.push({description: "Home", href: "/"});
  } else if(identify === "/wishlist") {
    itens.push({description: "Home", href: "/"}, {description: "Lista de Desejos", href: "/wishlist"});
  }
  let link = "";
  itens.map((item, index) => {
    link = document.createElement('a');
    link.setAttribute("href", item.href);
    link.innerHTML = item.description;
    document.querySelector(".breadcrumb").appendChild(link);
    if(itens.length !== 0 && index !== itens.length-1) {
      let arrow = document.createElement('p');
      arrow.innerHTML = ">";
      document.querySelector(".breadcrumb").appendChild(arrow);
    }
  })
}