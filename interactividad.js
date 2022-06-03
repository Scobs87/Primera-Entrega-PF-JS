const carrito = [];

class Disco {
  constructor(artista, album, genero, precio) {
    this.artista = artista;
    this.album = album;
    this.genero = genero;
    this.precio = precio;
  }
}

const disco1 = new Disco("Radiohead", "Ok Computer", "Rock Alternativo", 300);
const disco2 = new Disco("Gorillaz", "Demon Days", "Rock Alternativo", 400);
const disco3 = new Disco(
  "The Strokes",
  "Room On Fire",
  "Rock Alternativo",
  350
);
const disco4 = new Disco(
  "Interpol",
  "Turn On The Bright Lights",
  "Rock Alternativo",
  400
);
const disco5 = new Disco("Bjork", "Homogenic", "Electronica/Trip Hop", 500);

const seleccionarDisco = function () {
  const discoSeleccionado = prompt(
    " Bienvenido a Tijuana Record Shop! Selecciona algun disco de los siguentes artistas: Radiohead, Gorillaz, The Strokes, Interpol o Bjork"
  ).toLowerCase();

  if (discoSeleccionado == "radiohead") {
    alert("Uy! Se nos ha agotado este disco por el momento, una disculpa!");
    seleccionarDisco2();
  } else if (discoSeleccionado == "gorillaz") {
    carrito.push(disco2);
    mensajeDeSeleccion(disco2);
  } else if (discoSeleccionado == "the strokes") {
    carrito.push(disco3);
    mensajeDeSeleccion(disco3);
  } else if (discoSeleccionado == "interpol") {
    alert("Uy! Se nos ha agotado este disco por el momento, una disculpa!");
    seleccionarDisco2();
  } else if (discoSeleccionado == "bjork") {
    carrito.push(disco5);
    mensajeDeSeleccion(disco5);
  } else {
    alert("Por favor, ingresa una opcion correcta");
    seleccionarDisco2();
  }
};

const seleccionarDisco2 = function () {
  const discoSeleccionado = prompt(
    " Selecciona otro de nuestros artistas: Radiohead, Gorillaz, The Strokes, Interpol o Bjork"
  ).toLowerCase();

  if (discoSeleccionado == "radiohead") {
    alert("Uy! Se nos ha agotado este disco por el momento, una disculpa!");
    seleccionarDisco2();
  } else if (discoSeleccionado == "gorillaz") {
    carrito.push(disco2);
    mensajeDeSeleccion(disco2);
  } else if (discoSeleccionado == "the strokes") {
    carrito.push(disco3);
    mensajeDeSeleccion(disco3);
  } else if (discoSeleccionado == "interpol") {
    alert("Uy! Se nos ha agotado este disco por el momento, una disculpa!");
    seleccionarDisco2();
  } else if (discoSeleccionado == "bjork") {
    carrito.push(disco5);
    mensajeDeSeleccion(disco5);
  } else {
    alert("Por favor, ingresa una opcion correcta");
    seleccionarDisco2();
  }
};

const mensajeDeSeleccion = function (disco) {
  console.log(
    disco.artista +
      "-" +
      disco.album +
      " " +
      "de genero" +
      " " +
      disco.genero +
      " " +
      "tiene un precio de" +
      " " +
      disco.precio +
      " " +
      "pesos."
  );

  if (confirm("Quieres llevarte otro disco?")) {
    seleccionarDisco2();
  } else {
    console.log("Tu total de hoy es $" + totalDeCompra() + "pesos");
    console.log(carrito);
  }
};

const totalDeCompra = function () {
  let sumaTotal = 0;
  for (const elemento of carrito) {
    sumaTotal += elemento.precio;
  }
  return sumaTotal;
};

seleccionarDisco();
