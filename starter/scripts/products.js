
class Product {
    constructor(id, title, price, stock, photo, onsale, supplier, colors, description, taxPolicy) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.stock = stock;
        this.photo = photo;
        this.onsale = onsale;
        this._supplier = supplier;
        this.colors = colors;
        this.description = description;
        this.taxPolicy = taxPolicy;
    }

    get supplier() {
        return this._supplier;
    }

    set supplier(newSupplier) {
        this._supplier = newSupplier;
    }
}


const product1 = new Product("001", "Macbook Pro 15'4", 750000, 20, ["./assets/mock1.jpg", "./assets/mock2.jpg", "./assets/mock2.jpg"], "50% Off", "Mac", ["Rosa", "Morado"], "Space Gray", "Incluye impuesto País y percepción AFIP");
const product2 = new Product("002", "Mouse HP", 30, 20, ["./assets/hp2.jpg", "./assets/hp.jpg", "./assets/hp-plomo.jpg", "./assets/hp-dorado.webp"], "50% Off", "HP", ["Blanco", "Azul"], "HP mouse para gamers", "Incluye impuesto País y percepción AFIP");
const product3 = new Product("003", "Teclado Genius", 99, 20, ["./assets/genius.jpg"], "50% Off", "GENIUS", ["Blanco", "Negro", "Rojo"], "El Genius te asegurará una respuesta ultrarrápida de 1 ms en modo inalámbrico. Además, permite conexión a través de Bluetooth 5.0 con una velocidad de transmisión de hasta 2 Mbps. Gracias a su diseño compacto 60% y a su práctico cable desmontable, el GENIUS te permitirá ganar más espacio. Prepárate para ser invencible, a tu estilo", "Incluye impuesto País y percepción AFIP");
const product4 = new Product("004", "Monitor HP", 15000, 20, ["./assets/monitor-hp.jpg", "./assets/monitor-hp.jpg", "./assets/monitor-hp.jpg"], "50% Off", "HP", ["Blanco", "Negro"], "Space Gray", "Incluye impuesto País y percepción AFIP");
const product5 = new Product("005", "Puertos USB PHP", 15, 20, ["./assets/php.jpg", "./assets/php.jpg",], "50% Off", "PHP", ["black", "white"], "Space Gray", "Incluye impuesto País y percepción AFIP");
const product6 = new Product("006", "Laptop HP GAMING", 740000, 20, ["./assets/laptop.jpeg", "./assets/laptop.jpeg",], "50% Off", "TOSHIBA", ["black", "white"], "Space Gray", "Incluye impuesto País y percepción AFIP");


//Creamos el array de los productos
let products = [product1, product2, product3, product4, product5, product6];