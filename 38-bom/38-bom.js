
'use strict'

// Browser Object Model

function getBom(){
console.log(window.innerWidth);
console.log(screen.width);

console.log(window.innerHeight);
console.log(screen.height);

console.log(window.location);
};

// Desde consola se accede a la función y en el parámetro se coloca una url para redireccionar.
function redirect(url){
    window.location.href = url;
}
// Desde consola se accede a la función y en el parámetro se coloca una url para redireccionar y se abre en nueva pestaña.
function abrirVentana(url){
    window.open(url, "", "width=400, height=300");
}
getBom();