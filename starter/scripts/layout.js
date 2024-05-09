const navSelector = document.getElementById("nav");
const options = [
    { title: "Ofertas de la semana", linkTo: "./outlet.html", opts: ["Laptops", "Audio", "Auticulares"] },
    { title: "Productos", linkTo: "./how.html", opts: ["Formas de pago", "", ""] },
    { title: "Contacto", linkTo: "./taxs.html", opts: ["Impuestos", ""] },
    { title: "Marcas", linkTo: "./orders.html", opts: ["", ""] },
    { title: "Descuentos", linkTo: "./warranty.html", opts: [] },
];


for (let option of options) {
    //Creando etiqueta li
    const li = document.createElement("li");

    //creando etiqueta a
    const anchor = document.createElement("a");
    anchor.className = "nav-button"
    anchor.textContent = option.title
    anchor.href = option.linkTo

    li.appendChild(anchor);

    navSelector.appendChild(li)
}


const footerSelector = document.querySelector("#footer");