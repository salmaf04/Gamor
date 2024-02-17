
//Carrusel de texto

var indice = 0;
mostrarTextos();

function movertext(n) {
  indice += n;
  mostrarTextos();
}

function mostrarTextos() {
  var i;
  var textos = document.getElementsByClassName("textoCarrusel");
  if (indice >= textos.length) {indice = 0}
  if (indice < 0) {indice = textos.length - 1}
  for (i = 0; i < textos.length; i++) {
      textos[i].style.display = "none";
  }
  textos[indice].style.display = "block";
}

// Cambia el texto cada 2 segundos
setInterval(function() {
  movertext(1);
}, 2000);


//Carrusel de Imagenes

var indice = 0; 
mostrarImagenes(); 

function mover(n) { 
  indice += n; 
  mostrarImagenes(); 
} 

function mostrarImagenes() { 
  var i; 
  var imagenes = document.getElementsByClassName("imagenCarrusel"); 
  if (indice >= imagenes.length) {indice = 0} 
  if (indice < 0) {indice = imagenes.length - 1} 
  for (i = 0; i < imagenes.length; i++) { 
      imagenes[i].style.display = "none"; 
  } 
  imagenes[indice].style.display = "block"; 
} 

// Cambia la imagen cada 4 segundos 
setInterval(function() { 
  mover(1); 
}, 5000);