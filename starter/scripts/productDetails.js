const query = location.search;
const params = new URLSearchParams(query);
const id = params.get('id');
const productDetailsContainer = document.getElementById('product-detail');
console.log(productDetailsContainer)
function printDetails(idProduct) {
  const product = products.find((Element) => Element.id == idProduct);
  //para las miniaturas
  let smallImages = '';
  for (const image of product.photo) {
    smallImages += `<div class="thumbnail-container"><img src="${image}" alt="${product.title}"></div>`;
  }
  //para los colores
  let colorOptions = '';
  for (const color of product.colors) {
    colorOptions += `<option value="${color}">${color}</option>`;
  }

  const detailTemplate = `
        <div class="product-images-block">
          ${smallImages}
          <img class="main-image" src="${product.photo[0]}" alt="Macbook img1">
        </div>

        <div class="product-description-block">
        <h1 class="titulo">${product.title}</h1>
        <form class="selector">
          <fieldset>
            <label class="label" for="color">Color</label>
            <select id="">
              ${colorOptions}
            </select>
          </fieldset>
        </form>
        <div class="description">
          <h1>Descripcion:</h1>
          <p>
            ${product.description}
          </p>
        </div>
      </div>

      <div class="product-checkout-block">
          <div class="checkout-container">
            <span class="checkout-total-label">Total:</span>
            <h2 class="checkout-total-price">$${product.price}</h2>
            <p class="checkout-description">
              Incluye impuesto PAIS y percepción AFIP. Podés recuperar AR$ 50711
              haciendo la solicitud en AFIP.
            </p>
            <ul class="checkout-policy-list">
              <li>
                <span class="policy-icon"><img src="./assets/truck.png" alt="Truck" /></span>
                <span class="policy-desc">Agrega el producto al carrito para conocer los costos de envío</span>
              </li>
              <li>
                <span class="policy-icon"><img src="./assets/plane.png" alt="Plane" /></span>
                <span class="policy-desc">Recibí aproximadamente entre 10 y 15 días hábiles, seleccionando
                  envío normal</span>
              </li>
            </ul>
            <div class="checkout-process">
              <div class="top">
                <input type="number" value="1" />
                <button class="btn-primary">Comprar</button>
              </div>
              <div class="bottom">
                <button class="btn-outline">Añadir al Carrito</button>
              </div>
            </div>
          </div>
        </div>
    `;
  productDetailsContainer.innerHTML = detailTemplate;
}

printDetails(id)