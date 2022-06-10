class Disco {
  constructor(artista, album, genero, precio, arte) {
    this.artista = artista;
    this.album = album;
    this.genero = genero;
    this.precio = precio;
    this.arte = arte;
  }
}

const disco1 = new Disco(
  "Radiohead",
  "Ok Computer",
  "Rock Alternativo",
  300,
  "./Imagenes/ok computer.jpg"
);
const disco2 = new Disco(
  "Gorillaz",
  "Demon Days",
  "Rock Alternativo",
  400,
  "./Imagenes/Gorillaz.jpg"
);
const disco3 = new Disco(
  "The Strokes",
  "Room On Fire",
  "Rock Alternativo",
  350,
  "./Imagenes/Room on Fire.jpg"
);
const disco4 = new Disco(
  "Interpol",
  "Turn On The Bright Lights",
  "Rock Alternativo",
  400,
  "./Imagenes/Interpol.jpg"
);
const disco5 = new Disco(
  "Bjork",
  "Homogenic",
  "Electronica/Trip Hop",
  500,
  "./Imagenes/bjork.jpg"
);
const disco6 = new Disco(
  "Nine Inch Nails",
  "Fragile",
  "Rock Industrial",
  450,
  "./Imagenes/NIN.jpg"
);

const inventarioDiscos = [disco1, disco2, disco3, disco4, disco5, disco6];
let carrito = [];

const contenedor = document.querySelector("#contenedor");

inventarioDiscos.forEach((disco) => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
  
        <img src="${disco.arte}" alt="" />
        <h4 class="cardArtista">${disco.artista} </h4>
        <p class="cardAlbum bold"> ${disco.album} </p>
        <p class="cardGenero"> ${disco.genero} </p>
        <span class="cardPrecio bold">$${disco.precio} </span>
        <button data-id="${disco.artista} " class="botonSelect">Seleccionar disco</button>
     
  `;
  contenedor.append(card);
});

const mostrarEvento = (e) => {
  console.log(e.target.getAttribute("data-id"));
};

const boton = document.querySelectorAll(".botonSelect");
boton.forEach((boton) => {
  boton.addEventListener("click", mostrarEvento);
});
