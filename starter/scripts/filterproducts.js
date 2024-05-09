const captureText = (event) => {

    let text = event.target.value;


    let filteredProducts = products.filter(product => product.title.toLowerCase().includes(text.toLowerCase()));
    printCards(filteredProducts, "products");
}


let searchSelector = document.querySelector("#search");
searchSelector.addEventListener("keyup", event=>captureText(event));