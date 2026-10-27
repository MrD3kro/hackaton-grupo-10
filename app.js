const CATALOGO = [
    {
        id: 1,
        nombre: "Balón de fútbol Pro",
        precio: 89900,
        categoria: "balones",
        deporte: "Futbol",
        marca: "Golazo",
        descripcion: "Balón resistente para entrenamientos y partidos de fútbol.",
        Imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa0QhwHBbLz6XX-A39b7D7cqDwL1pEwFfpV98TBbbSr4Q_wmmejtYwTEwh&s=10"
    },
    {
        id: 2,
        nombre: "Balón de fútbol entrenamiento",
        precio: 59900,
        categoria: "balones",
        deporte: "Futbol",
        marca: "Cancha",
        descripcion: "Balón versátil para prácticas y partidos recreativos.",
        Imagen: "https://fenixdeportes.com.co/cdn/shop/files/HyperNaranja_5.jpg?v=1715741088&width=777"
    },
    {
        id: 3,
        nombre: "Balón de baloncesto clásico",
        precio: 79900,
        categoria: "balones",
        deporte: "Baloncesto",
        marca: "AroMax",
        descripcion: "Balón con buen agarre para jugar en canchas interiores y exteriores.",
        Imagen: "https://contents.mediadecathlon.com/p3035867/k$394b3edd0e96dcc6d447807df1826606/picture.jpg"
    },
    {
        id: 4,
        nombre: "Balón de baloncesto profesional",
        precio: 129900,
        categoria: "balones",
        deporte: "Baloncesto",
        marca: "DunkPro",
        descripcion: "Balón de alto agarre para entrenamientos exigentes.",
        Imagen: "https://molten.com.co/cdn/shop/files/balon-baloncesto-33-caucho-b33t2000-1310966.png?v=1761266795"
    },
    {
        id: 5,
        nombre: "Balón de volleyball",
        precio: 69900,
        categoria: "balones",
        deporte: "Volleyball",
        marca: "VoleiSport",
        descripcion: "Balón ligero para partidos y entrenamientos de voleibol.",
        Imagen: "https://deportesregol.com/cdn/shop/files/1903_Balon_Voleibol_Pro_Microfibra_V-5000_Lateral.jpg?v=1742200197&width=1024"
    },
    {
        id: 6,
        nombre: "Balón de volleyball playa",
        precio: 74900,
        categoria: "balones",
        deporte: "Volleyball",
        marca: "ArenaPlay",
        descripcion: "Balón para jugar voleibol recreativo en la playa.",
        Imagen: "https://contents.mediadecathlon.com/p2637123/k$c375c4483682da4e8bbd309dda22e10a/picture.jpg"
    },
    {
        id: 7,
        nombre: "Pelotas de tenis",
        precio: 39900,
        categoria: "balones",
        deporte: "Tennis",
        marca: "MatchPoint",
        descripcion: "Pelotas para prácticas y partidos recreativos de tenis.",
        Imagen: "https://deportesregol.com/cdn/shop/files/7483_Pelota_Tenis_Campo_x3pcs.jpg?v=1742202798"
    },
    {
        id: 8,
        nombre: "Tenis de entrenamiento para fútbol",
        precio: 189900,
        categoria: "calzado deportivos",
        deporte: "Futbol",
        marca: "TrailStep",
        descripcion: "Calzado deportivo cómodo para calentamientos y entrenamiento físico.",
        Imagen: "https://cdn.shopify.com/s/files/1/0595/8628/1554/files/6000051-016_Y81_1.jpg?v=1785795666"
    },
    {
        id: 9,
        nombre: "Guayos para césped natural",
        precio: 249900,
        categoria: "calzado deportivos",
        deporte: "Futbol",
        marca: "Golazo",
        descripcion: "Guayos con tacos para mejorar la tracción en césped natural.",
        Imagen: "https://http2.mlstatic.com/D_NQ_NP_881786-MCO106005083623_012026-O.webp"
    },
    {
        id: 10,
        nombre: "Guayos para césped sintético",
        precio: 219900,
        categoria: "calzado deportivos",
        deporte: "Futbol",
        marca: "Cancha",
        descripcion: "Calzado con suela multitaco para canchas de césped sintético.",
        Imagen: "https://http2.mlstatic.com/D_NQ_NP_601073-CBT112295672885_052026-O.webp"
    },
    {
        id: 11,
        nombre: "Patines en línea recreativos",
        precio: 329900,
        categoria: "calzado deportivos",
        deporte: "Patinaje",
        marca: "RuedaLibre",
        descripcion: "Patines en línea para practicar y recorrer distancias recreativas.",
        Imagen: "https://www.cougar.com.co/cdn/shop/files/MZS303_NEGRO.jpg?v=1771944541"
    },
    {
        id: 12,
        nombre: "Patines de velocidad",
        precio: 499900,
        categoria: "calzado deportivos",
        deporte: "Patinaje",
        marca: "Veloci",
        descripcion: "Patines diseñados para entrenamientos de velocidad y técnica.",
        Imagen: "https://www.cougar.com.co/cdn/shop/files/SK1_ROSADO_2.jpg?v=1770062487"
    },
    {
        id: 13,
        nombre: "Tenis de baloncesto",
        precio: 279900,
        categoria: "calzado deportivos",
        deporte: "Baloncesto",
        marca: "DunkPro",
        descripcion: "Calzado con soporte y amortiguación para movimientos rápidos en cancha.",
        Imagen: "https://contents.mediadecathlon.com/p2392995/k$28ed3b322503d0adb238c86a279778e0/picture.jpg"
    },
    {
        id: 14,
        nombre: "Tenis de volleyball",
        precio: 239900,
        categoria: "calzado deportivos",
        deporte: "Volleyball",
        marca: "VoleiSport",
        descripcion: "Calzado con suela de agarre para desplazamientos en cancha.",
        Imagen: "https://contents.mediadecathlon.com/p2521570/k$e71ff5a3efb7088d22bca3ff352ce054/picture.jpg"
    },
    {
        id: 15,
        nombre: "Tenis para cancha de tenis",
        precio: 259900,
        categoria: "calzado deportivos",
        deporte: "Tennis",
        marca: "MatchPoint",
        descripcion: "Calzado con estabilidad lateral para los movimientos del tenis.",
        Imagen: "https://contents.mediadecathlon.com/p2713915/k$fc1ff50a109790dde5ad30c9617c1d67/picture.jpg"
    },
    {
        id: 16,
        nombre: "Camiseta deportiva transpirable",
        precio: 69900,
        categoria: "ropa",
        deporte: "Futbol",
        marca: "Cancha",
        descripcion: "Camiseta ligera y cómoda para entrenamientos y partidos.",
        Imagen: "https://www.puntoblanco.co/cdn/shop/files/752496-051743-1.jpg?v=1790963138"
    },
    {
        id: 17,
        nombre: "Uniforme de fútbol",
        precio: 149900,
        categoria: "ropa",
        deporte: "Futbol",
        marca: "Golazo",
        descripcion: "Conjunto de camiseta y pantaloneta para jugar fútbol.",
        Imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMP6JtnYOWX9mB2G339slJgbpMoNy9AE9i9vlHVuY-cUMW0IovSrh24e9Y&s=10"
    },
    {
        id: 18,
        nombre: "Licra de patinaje",
        precio: 89900,
        categoria: "ropa",
        deporte: "Patinaje",
        marca: "Veloci",
        descripcion: "Prenda elástica que facilita el movimiento durante el entrenamiento.",
        Imagen: "https://exitocol.vteximg.com.br/arquivos/ids/4984851/licra-patinaje-champion.jpg?v=637412241111570000"
    },
    {
        id: 19,
        nombre: "Camiseta de baloncesto",
        precio: 79900,
        categoria: "ropa",
        deporte: "Baloncesto",
        marca: "DunkPro",
        descripcion: "Camiseta cómoda para entrenar o jugar partidos.",
        Imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3qGN2pUO-TD1dAFKY9gVvcRcS7hDzWM4tuLNLbqAsgw&s=10"
    },
    {
        id: 20,
        nombre: "Pantaloneta de baloncesto",
        precio: 74900,
        categoria: "ropa",
        deporte: "Baloncesto",
        marca: "AroMax",
        descripcion: "Pantaloneta ligera y holgada para entrenamientos y partidos.",
        Imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFqwFsWbeyGFyqpJfR0FOKkkXabduoV2m3qUoMyoLxIQ&s=10"
    },
    {
        id: 21,
        nombre: "Camiseta de volleyball",
        precio: 69900,
        categoria: "ropa",
        deporte: "Volleyball",
        marca: "VoleiSport",
        descripcion: "Camiseta deportiva de secado rápido para entrenar.",
        Imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqZ7qRffJ1slmpIdLQLtn8EI7cBV4KOfRKmFgCk9__Tg&s=10"
    },
    {
        id: 22,
        nombre: "Falda deportiva de tenis",
        precio: 109900,
        categoria: "ropa",
        deporte: "Tennis",
        marca: "MatchPoint",
        descripcion: "Falda deportiva cómoda para moverse con libertad en la cancha.",
        Imagen: "https://img.ltwebstatic.com/v4/j/pi/2026/06/25/d6/17823780248b90eccef71f808f5ec72840033b8c0e_thumbnail_750x999.jpg"
    },
    {
        id: 23,
        nombre: "Pantaloneta de tenis",
        precio: 79900,
        categoria: "ropa",
        deporte: "Tennis",
        marca: "MatchPoint",
        descripcion: "Pantaloneta ligera con bolsillos para entrenar y jugar.",
        Imagen: "https://contents.mediadecathlon.com/p2454700/k$3044274e5c6f95734aaf630db5f37e18/picture.jpg"
    },
    {
        id: 24,
        nombre: "Morral deportivo",
        precio: 119900,
        categoria: "accesorios",
        deporte: "Futbol",
        marca: "AventuraFit",
        descripcion: "Morral para transportar ropa, botella y elementos de entrenamiento.",
        Imagen: "https://acdn-us.mitiendanube.com/stores/007/060/522/products/maleta-morral-gimnasio-fitness-deportivo-pbold-1-e2c9ecbfc2a22a8bf717659880388551-1024-1024.webp"
    },
    {
        id: 25,
        nombre: "Espinilleras de fútbol",
        precio: 34900,
        categoria: "accesorios",
        deporte: "Futbol",
        marca: "Golazo",
        descripcion: "Protecciones para ayudar a proteger las espinillas durante el juego.",
        Imagen: "https://www.sportline.com.co/media/catalog/product/s/p/sp0040-009-phsfp001-1000.png?optimize=medium&bg-color=255,255,255&fit=bounds&height=&width=&canvas=:&format=jpeg"
    },
    {
        id: 26,
        nombre: "Casco para patinaje",
        precio: 99900,
        categoria: "accesorios",
        deporte: "Patinaje",
        marca: "RuedaLibre",
        descripcion: "Casco ajustable para acompañar las prácticas de patinaje.",
        Imagen: "https://contents.mediadecathlon.com/p2571597/k$eb16ce180b3f0e8e9cd3bfe2f4574e18/picture.jpg"
    },
    {
        id: 27,
        nombre: "Rodilleras deportivas",
        precio: 54900,
        categoria: "accesorios",
        deporte: "Volleyball",
        marca: "VoleiSport",
        descripcion: "Rodilleras acolchadas para entrenamientos y partidos de voleibol.",
        Imagen: "https://exitocol.vteximg.com.br/arquivos/ids/30957644/rodilleras-deportivas-x2-voleibol-patinaje-basquet-multiusos.jpg?v=638941555245500000"
    },
    {
        id: 28,
        nombre: "Muñequeras deportivas",
        precio: 24900,
        categoria: "accesorios",
        deporte: "Baloncesto",
        marca: "AroMax",
        descripcion: "Muñequeras absorbentes para entrenamientos y partidos.",
        Imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuUW7p0C9qVgZJ8M-2ZCcuokbupqzVDV6IZkZt4RF2CUUsQsuWzLntanJi&s=10"
    },
    {
        id: 29,
        nombre: "Raqueta de tenis",
        precio: 199900,
        categoria: "accesorios",
        deporte: "Tennis",
        marca: "MatchPoint",
        descripcion: "Raqueta recreativa para practicar golpes y jugar partidos.",
        Imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQau5tPAt4EhCaJoELL5FgCRj_ed6kG_Vqnu_MBOW8CL4uNxH52ZwsV2TA&s=10"
    },
    {
        id: 30,
        nombre: "Bolso para patines",
        precio: 89900,
        categoria: "accesorios",
        deporte: "Patinaje",
        marca: "Veloci",
        descripcion: "Bolso ventilado para transportar patines y accesorios de entrenamiento.",
        Imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF3A9EhM9EFMJqSFwplCdbrVDw_1ItCCW2Lx1f8ePIfw&s=10"
    }
];

const catalogoProductos = document.getElementById("productos");
const contadorCarrito = document.getElementById("cart-counter");
const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");
const clearCartButton = document.getElementById("clear-cart-btn");
const checkoutButton = document.getElementById("checkout-btn");
const cartStorageKey = "rovent-cart";

const formatearPrecio = (valor) => valor.toLocaleString("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0
});

// Cada línea guarda el ID del producto y cuántas unidades hay en el carrito.
let carrito = [];
try {
    const carritoGuardado = JSON.parse(localStorage.getItem(cartStorageKey) || "[]");
    if (Array.isArray(carritoGuardado)) {
        carrito = carritoGuardado.filter(linea =>
            linea &&
            Number.isInteger(linea.id) &&
            CATALOGO.some(producto => producto.id === linea.id) &&
            Number.isInteger(linea.cantidad) &&
            linea.cantidad > 0
        );
    }
} catch (error) {
    console.error("No se pudo leer el carrito guardado.", error);
}

function guardarCarrito() {
    localStorage.setItem(cartStorageKey, JSON.stringify(carrito));
}

function mostrarCatalogo() {
    catalogoProductos.innerHTML = CATALOGO.map(producto => `
        <li class="col-12 col-sm-6 col-lg-4 col-xl-3">
            <article class="product-card">
                <img
                    class="product-image"
                    src="${producto.Imagen}"
                    alt="Fotografía de ${producto.nombre}"
                    loading="lazy"
                >
                <div class="product-content">
                    <p class="product-category">${producto.categoria}</p>
                    <h3 class="product-name">${producto.nombre}</h3>
                    <p class="product-description">${producto.descripcion}</p>
                    <p class="product-brand">${producto.marca}</p>
                    <div class="product-purchase">
                        <p class="product-price">${formatearPrecio(producto.precio)}</p>
                        <button
                            class="btn btn-rovent-primary agregar-carrito"
                            type="button"
                            data-id="${producto.id}"
                            aria-label="Agregar ${producto.nombre} al carrito"
                        >Agregar</button>
                    </div>
                </div>
            </article>
        </li>
    `).join("");
}

function mostrarCarrito() {
    const cantidadTotal = carrito.reduce((total, linea) => total + linea.cantidad, 0);
    const precioTotal = carrito.reduce((total, linea) => {
        const producto = CATALOGO.find(item => item.id === linea.id);
        return total + producto.precio * linea.cantidad;
    }, 0);

    contadorCarrito.textContent = cantidadTotal;
    contadorCarrito.setAttribute("aria-label", `${cantidadTotal} productos en el carrito`);
    cartTotal.textContent = formatearPrecio(precioTotal);

    if (carrito.length === 0) {
        cartItems.innerHTML = '<p class="cart-empty">Tu carrito está vacío.</p>';
        return;
    }

    cartItems.innerHTML = carrito.map(linea => {
        const producto = CATALOGO.find(item => item.id === linea.id);

        return `
            <article class="cart-item">
                <img class="cart-item-image" src="${producto.Imagen}" alt="">
                <div>
                    <h3 class="cart-item-name">${producto.nombre}</h3>
                    <span class="cart-item-price">${formatearPrecio(producto.precio * linea.cantidad)}</span>
                </div>
                <div class="cart-item-controls">
                    <button class="cart-quantity-button" type="button"
                        data-accion="restar" data-id="${producto.id}" aria-label="Disminuir cantidad">−</button>
                    <span class="cart-quantity">${linea.cantidad}</span>
                    <button class="cart-quantity-button" type="button"
                        data-accion="sumar" data-id="${producto.id}" aria-label="Aumentar cantidad">+</button>
                    <button class="cart-remove-button" type="button"
                        data-accion="quitar" data-id="${producto.id}" aria-label="Eliminar ${producto.nombre}">
                        <i class="fa-solid fa-trash-can" aria-hidden="true"></i>
                    </button>
                </div>
            </article>
        `;
    }).join("");
}

function agregarAlCarrito(idProducto) {
    const linea = carrito.find(item => item.id === idProducto);
    if (linea) {
        linea.cantidad += 1;
    } else {
        carrito.push({ id: idProducto, cantidad: 1 });
    }
    guardarCarrito();
    mostrarCarrito();
}

mostrarCatalogo();
mostrarCarrito();

catalogoProductos.addEventListener("click", event => {
    if (!(event.target instanceof Element)) return;
    const boton = event.target.closest(".agregar-carrito");
    if (boton) agregarAlCarrito(Number(boton.dataset.id));
});

cartItems.addEventListener("click", event => {
    if (!(event.target instanceof Element)) return;
    const boton = event.target.closest("button[data-accion]");
    if (!boton) return;

    const idProducto = Number(boton.dataset.id);
    const linea = carrito.find(item => item.id === idProducto);
    if (!linea) return;

    if (boton.dataset.accion === "sumar") linea.cantidad += 1;
    if (boton.dataset.accion === "restar") linea.cantidad -= 1;
    if (boton.dataset.accion === "quitar" || linea.cantidad === 0) {
        carrito = carrito.filter(item => item.id !== idProducto);
    }

    guardarCarrito();
    mostrarCarrito();
});

clearCartButton.addEventListener("click", () => {
    carrito = [];
    guardarCarrito();
    mostrarCarrito();
});

checkoutButton.addEventListener("click", () => {
    alert("El pago todavía no está disponible en esta tienda de demostración.");
});