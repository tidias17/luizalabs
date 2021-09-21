"use strict";

function renderBreadcrumb() {
  var itens, link;
  return regeneratorRuntime.async(function renderBreadcrumb$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          itens = [];

          if (identify === "/") {
            itens.push({
              description: "Home",
              href: "/"
            });
          } else if (identify === "/wishlist") {
            itens.push({
              description: "Home",
              href: "/"
            }, {
              description: "Lista de Desejos",
              href: "/wishlist"
            });
          }

          link = "";
          itens.map(function (item, index) {
            link = document.createElement('a');
            link.setAttribute("href", item.href);
            link.innerHTML = item.description;
            document.querySelector(".breadcrumb").appendChild(link);

            if (itens.length !== 0 && index !== itens.length - 1) {
              var arrow = document.createElement('p');
              arrow.innerHTML = ">";
              document.querySelector(".breadcrumb").appendChild(arrow);
            }
          });

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
}