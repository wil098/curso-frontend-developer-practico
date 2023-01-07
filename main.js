//Menu Desktop
//se seleccionan las clases en las variables que queremos usar
let desktopMenu = document.querySelector('.desktop-menu')
let navEmail = document.querySelector('.navbar-email')
let mobileMenu = document.querySelector('.mobile-menu')
let menuIcon = document.querySelector('.menuIcon')

//llamamos a la variable y agregamos el metodo
//dentro del metodo le decimos que quremos escuchar el click
//se agrega la funcion toggleDesktopMenu y luego se crea.
//Funciona para intercambiar el estado del menu a visible o invisible
navEmail.addEventListener('click', toggleDesktopMenu)
menuIcon.addEventListener('click', toggleMobileMenu)
//En esta funcion se usa para poder esconder o mostrar el menu desplegable
//Con toggle llamamos a la class inactive que creamos en el css y agregamos en html

//Menu desktop
function toggleDesktopMenu(){
   desktopMenu.classList.toggle('inactive')
}

//Menu Mobile
function toggleMobileMenu(){
    mobileMenu.classList.toggle('inactive')
}
