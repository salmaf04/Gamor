//Base de datos de juegos

const games = [
  { name: 'NBA 2K24', filters: ['Sports', 'Children', 'One Player', 'Free'] },
  { name: 'Buy a Dream', filters: ['Fashion', 'Teenager', 'Multiplayer', 'Payment'] },
  { name: 'Uncharted', filters: ['Adventure', 'Adults', 'One Player', 'Free'] },
  { name: 'MLB the Show 22', filters: ['Sports', 'Everyone', 'Multiplayer', 'Payment'] },
  { name: 'MyUniverse', filters: ['Fashion', 'Children', 'One Player', 'Free'] },
  { name: 'FarCry 4', filters: ['Adventure', 'Teenager', 'Multiplayer', 'Payment'] },
  { name: 'FIFA 2024', filters: ['Sports', 'Adults', 'One Player', 'Free'] },
  { name: 'Anime Show', filters: ['Fashion', 'Everyone', 'Multiplayer', 'Payment'] },
  { name: 'Tomb Mider', filters: ['Adventure', 'Children', 'One Player', 'Free'] },
  { name: 'NFL 2024', filters: ['Sports', 'Teenager', 'Multiplayer', 'Payment'] },
  
];

function loadGames() {
  const gameList = document.getElementById('gameList');
  
  // Limpiar la lista de juegos
  gameList.innerHTML = '';
  
  for (let game of games) {
    // Crear un nuevo elemento de párrafo
    let p = document.createElement('p');
    p.textContent = game.name;
    
    // Añadir el párrafo a la lista de juegos
    gameList.appendChild(p);
  }
}

function searchGame() {
  const gameList = document.getElementById('gameList');
  
  // Obtener los filtros seleccionados agrupados por categoría
  let selectedFilters = {
    genre: [],
    age: [],
    players: [],
    category: []
  };
  let filterCheckboxes = document.querySelectorAll('#filters input[type=checkbox]:checked');
  for (let checkbox of filterCheckboxes) {
    selectedFilters[checkbox.name].push(checkbox.value);
  }
  
  // Limpiar la lista de juegos
  gameList.innerHTML = '';
  
  for (let game of games) {
    // Comprueba si el juego tiene al menos un filtro de cada categoría seleccionada
    let matchesAllCategories = true;
    for (let category in selectedFilters) {
      if (selectedFilters[category].length > 0 && !selectedFilters[category].some(filter => game.filters.includes(filter))) {
        matchesAllCategories = false;
        break;
      }
    }
    
    if (matchesAllCategories) {
      // Crear un nuevo elemento de párrafo
      let p = document.createElement('p');
      p.textContent = game.name;
      
      // Añadir el párrafo a la lista de juegos
      gameList.appendChild(p);
    }
  }
}

function toggleFilters() {
  const filters = document.getElementById('filters');
  if (filters.style.display === 'none') {
    filters.style.display = 'block';
  } else {
    filters.style.display = 'none';
  }
}

// Llamar a loadGames() cuando se carga la página
window.onload = loadGames;




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
}, 4000);


//Ir a la pagina de Autenticación
let buttons = document.getElementsByClassName('authButton');
for (let button of buttons) {
  button.addEventListener('click', function() {
    window.location.href = 'auth.html';
  });
}
