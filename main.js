
//se seleccionan las clases en las variables que queremos usar
let desktopMenu = document.querySelector('.desktop-menu')
let navEmail = document.querySelector('.navbar-email')

//llamamos a la variable y agregamos el metodo
//dentro del metodo le decimos que quremos escuchar el click
//se agrega la funcion toggleDesktopMenu y luego se crea.
//Funciona para intercambiar el estado del menu a visible o invisible
navEmail.addEventListener('click', toggleDesktopMenu)

//En esta funcion se usa para poder esconder o mostrar el menu desplegable
//Con toggle llamamos a la class inactive que creamos en el css y agregamos en html

function toggleDesktopMenu(){
   desktopMenu.classList.toggle('inactive')
}

