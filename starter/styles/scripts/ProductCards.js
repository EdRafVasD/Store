function createCard(product) {
     return `<article class="product-card">
  <a href="./details.html">
    <img class="product-img" src="assets/mock1.jpg" alt="Macbook Pro" />
    <div class="product-info">
      <span class="product-title">${product.name}</span>
      <span class="product-description">${product.description}</span>
      <div class="product-price-block">
        <span class="price">S/${product.price}</span>
        <span class="discount">50% Off</span>
      </div>
      <div class="product-tax-policy">Incluye impuesto País y percepción AFIP</div>
    </div>
  </a>
  </article>
     `;
  }
  
function printCards(arrayOfProducts, idSelector) {
    let productsTemplate = "";
    for (const element of arrayOfProducts) {
      productsTemplate = productsTemplate + createCard(element);
    }
    const productsSelector = document.getElementById(idSelector);
    productsSelector.innerHTML = productsTemplate;
  }
  
  printCards(Productos, "products");


