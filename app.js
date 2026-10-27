const catalogoProductos = document.getElementById("productos");
const html="";

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
        Imagen: "ihttps://deportesregol.com/cdn/shop/files/1903_Balon_Voleibol_Pro_Microfibra_V-5000_Lateral.jpg?v=1742200197&width=1024"
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
        Imagen: "imagenes/camiseta-futbol.jpg"
    },
    {
        id: 17,
        nombre: "Uniforme de fútbol",
        precio: 149900,
        categoria: "ropa",
        deporte: "Futbol",
        marca: "Golazo",
        descripcion: "Conjunto de camiseta y pantaloneta para jugar fútbol.",
        Imagen: "imagenes/uniforme-futbol.jpg"
    },
    {
        id: 18,
        nombre: "Licra de patinaje",
        precio: 89900,
        categoria: "ropa",
        deporte: "Patinaje",
        marca: "Veloci",
        descripcion: "Prenda elástica que facilita el movimiento durante el entrenamiento.",
        Imagen: "imagenes/licra-patinaje.jpg"
    },
    {
        id: 19,
        nombre: "Camiseta de baloncesto",
        precio: 79900,
        categoria: "ropa",
        deporte: "Baloncesto",
        marca: "DunkPro",
        descripcion: "Camiseta cómoda para entrenar o jugar partidos.",
        Imagen: "imagenes/camiseta-baloncesto.jpg"
    },
    {
        id: 20,
        nombre: "Pantaloneta de baloncesto",
        precio: 74900,
        categoria: "ropa",
        deporte: "Baloncesto",
        marca: "AroMax",
        descripcion: "Pantaloneta ligera y holgada para entrenamientos y partidos.",
        Imagen: "imagenes/pantaloneta-baloncesto.jpg"
    },
    {
        id: 21,
        nombre: "Camiseta de volleyball",
        precio: 69900,
        categoria: "ropa",
        deporte: "Volleyball",
        marca: "VoleiSport",
        descripcion: "Camiseta deportiva de secado rápido para entrenar.",
        Imagen: "imagenes/camiseta-volleyball.jpg"
    },
    {
        id: 22,
        nombre: "Falda deportiva de tenis",
        precio: 109900,
        categoria: "ropa",
        deporte: "Tennis",
        marca: "MatchPoint",
        descripcion: "Falda deportiva cómoda para moverse con libertad en la cancha.",
        Imagen: "imagenes/falda-tenis.jpg"
    },
    {
        id: 23,
        nombre: "Pantaloneta de tenis",
        precio: 79900,
        categoria: "ropa",
        deporte: "Tennis",
        marca: "MatchPoint",
        descripcion: "Pantaloneta ligera con bolsillos para entrenar y jugar.",
        Imagen: "imagenes/pantaloneta-tenis.jpg"
    },
    {
        id: 24,
        nombre: "Morral deportivo",
        precio: 119900,
        categoria: "accesorios",
        deporte: "Futbol",
        marca: "AventuraFit",
        descripcion: "Morral para transportar ropa, botella y elementos de entrenamiento.",
        Imagen: "imagenes/morral-deportivo.jpg"
    },
    {
        id: 25,
        nombre: "Espinilleras de fútbol",
        precio: 34900,
        categoria: "accesorios",
        deporte: "Futbol",
        marca: "Golazo",
        descripcion: "Protecciones para ayudar a proteger las espinillas durante el juego.",
        Imagen: "imagenes/espinilleras.jpg"
    },
    {
        id: 26,
        nombre: "Casco para patinaje",
        precio: 99900,
        categoria: "accesorios",
        deporte: "Patinaje",
        marca: "RuedaLibre",
        descripcion: "Casco ajustable para acompañar las prácticas de patinaje.",
        Imagen: "imagenes/casco-patinaje.jpg"
    },
    {
        id: 27,
        nombre: "Rodilleras deportivas",
        precio: 54900,
        categoria: "accesorios",
        deporte: "Volleyball",
        marca: "VoleiSport",
        descripcion: "Rodilleras acolchadas para entrenamientos y partidos de voleibol.",
        Imagen: "imagenes/rodilleras.jpg"
    },
    {
        id: 28,
        nombre: "Muñequeras deportivas",
        precio: 24900,
        categoria: "accesorios",
        deporte: "Baloncesto",
        marca: "AroMax",
        descripcion: "Muñequeras absorbentes para entrenamientos y partidos.",
        Imagen: "imagenes/muñequeras.jpg"
    },
    {
        id: 29,
        nombre: "Raqueta de tenis",
        precio: 199900,
        categoria: "accesorios",
        deporte: "Tennis",
        marca: "MatchPoint",
        descripcion: "Raqueta recreativa para practicar golpes y jugar partidos.",
        Imagen: "imagenes/raqueta-tenis.jpg"
    },
    {
        id: 30,
        nombre: "Bolso para patines",
        precio: 89900,
        categoria: "accesorios",
        deporte: "Patinaje",
        marca: "Veloci",
        descripcion: "Bolso ventilado para transportar patines y accesorios de entrenamiento.",
        Imagen: "imagenes/bolso-patines.jpg"
    }
];

/* Para el cátalogo manejamos 2 filtros distintos:
Categorías: 
    balones, calzado deportivos, ropa, accesorios
Deportes:
    Futbol, Patinaje, Baloncesto, Volleyball,Tennis
*/


for (const producto of catalogoProductos) {
    html += `
        <li class="producto">
            
            <div class="contenido-producto">
                <h3>${producto.nombre}</h3>

                <img
                src="${producto.Imagen}"
                alt="Fotografía de ${producto.nombre}"
                >

                <p>${producto.descripcion}</p>
                <p>${producto.marca}</p>
                <p>${producto.precio}</p>

            </div>
        </li>
    `;
}

productos.innerHTML = html;
