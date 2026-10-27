
const CATALOGO = [
    {
        id: 1,
        nombre: "Balón de fútbol Pro",
        precio: 89900,
        categoria: "balones",
        deporte: "Futbol",
        marca: "Golazo",
        descripcion: "Balón resistente para entrenamientos y partidos de fútbol.",
        Imagen: "imagenes/balon-futbol-pro.jpg"
    },
    {
        id: 2,
        nombre: "Balón de fútbol entrenamiento",
        precio: 59900,
        categoria: "balones",
        deporte: "Futbol",
        marca: "Cancha",
        descripcion: "Balón versátil para prácticas y partidos recreativos.",
        Imagen: "imagenes/balon-futbol-entrenamiento.jpg"
    },
    {
        id: 3,
        nombre: "Balón de baloncesto clásico",
        precio: 79900,
        categoria: "balones",
        deporte: "Baloncesto",
        marca: "AroMax",
        descripcion: "Balón con buen agarre para jugar en canchas interiores y exteriores.",
        Imagen: "imagenes/balon-baloncesto-clasico.jpg"
    },
    {
        id: 4,
        nombre: "Balón de baloncesto profesional",
        precio: 129900,
        categoria: "balones",
        deporte: "Baloncesto",
        marca: "DunkPro",
        descripcion: "Balón de alto agarre para entrenamientos exigentes.",
        Imagen: "imagenes/balon-baloncesto-pro.jpg"
    },
    {
        id: 5,
        nombre: "Balón de volleyball",
        precio: 69900,
        categoria: "balones",
        deporte: "Volleyball",
        marca: "VoleiSport",
        descripcion: "Balón ligero para partidos y entrenamientos de voleibol.",
        Imagen: "imagenes/balon-volleyball.jpg"
    },
    {
        id: 6,
        nombre: "Balón de volleyball playa",
        precio: 74900,
        categoria: "balones",
        deporte: "Volleyball",
        marca: "ArenaPlay",
        descripcion: "Balón para jugar voleibol recreativo en la playa.",
        Imagen: "imagenes/balon-volleyball-playa.jpg"
    },
    {
        id: 7,
        nombre: "Pelotas de tenis",
        precio: 39900,
        categoria: "balones",
        deporte: "Tennis",
        marca: "MatchPoint",
        descripcion: "Pelotas para prácticas y partidos recreativos de tenis.",
        Imagen: "imagenes/pelotas-tenis.jpg"
    },
    {
        id: 8,
        nombre: "Tenis de entrenamiento para fútbol",
        precio: 189900,
        categoria: "calzado deportivos",
        deporte: "Futbol",
        marca: "TrailStep",
        descripcion: "Calzado deportivo cómodo para calentamientos y entrenamiento físico.",
        Imagen: "imagenes/tenis-entrenamiento-futbol.jpg"
    },
    {
        id: 9,
        nombre: "Guayos para césped natural",
        precio: 249900,
        categoria: "calzado deportivos",
        deporte: "Futbol",
        marca: "Golazo",
        descripcion: "Guayos con tacos para mejorar la tracción en césped natural.",
        Imagen: "imagenes/guayos-cesped-natural.jpg"
    },
    {
        id: 10,
        nombre: "Guayos para césped sintético",
        precio: 219900,
        categoria: "calzado deportivos",
        deporte: "Futbol",
        marca: "Cancha",
        descripcion: "Calzado con suela multitaco para canchas de césped sintético.",
        Imagen: "imagenes/guayos-cesped-sintetico.jpg"
    },
    {
        id: 11,
        nombre: "Patines en línea recreativos",
        precio: 329900,
        categoria: "calzado deportivos",
        deporte: "Patinaje",
        marca: "RuedaLibre",
        descripcion: "Patines en línea para practicar y recorrer distancias recreativas.",
        Imagen: "imagenes/patines-linea.jpg"
    },
    {
        id: 12,
        nombre: "Patines de velocidad",
        precio: 499900,
        categoria: "calzado deportivos",
        deporte: "Patinaje",
        marca: "Veloci",
        descripcion: "Patines diseñados para entrenamientos de velocidad y técnica.",
        Imagen: "imagenes/patines-velocidad.jpg"
    },
    {
        id: 13,
        nombre: "Tenis de baloncesto",
        precio: 279900,
        categoria: "calzado deportivos",
        deporte: "Baloncesto",
        marca: "DunkPro",
        descripcion: "Calzado con soporte y amortiguación para movimientos rápidos en cancha.",
        Imagen: "imagenes/tenis-baloncesto.jpg"
    },
    {
        id: 14,
        nombre: "Tenis de volleyball",
        precio: 239900,
        categoria: "calzado deportivos",
        deporte: "Volleyball",
        marca: "VoleiSport",
        descripcion: "Calzado con suela de agarre para desplazamientos en cancha.",
        Imagen: "imagenes/tenis-volleyball.jpg"
    },
    {
        id: 15,
        nombre: "Tenis para cancha de tenis",
        precio: 259900,
        categoria: "calzado deportivos",
        deporte: "Tennis",
        marca: "MatchPoint",
        descripcion: "Calzado con estabilidad lateral para los movimientos del tenis.",
        Imagen: "imagenes/tenis-cancha.jpg"
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