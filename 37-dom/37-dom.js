
'use strict'

// Document Object Model



function cambiaColor(cualquierColor){
    caja.style.background = cualquierColor;
}


// Conseguir elementos con un ID concreto

// var caja = document.getElementById("micaja");
var caja = document.querySelector("#micaja");

caja.innerHTML = "¡CAMBIANDO A MI ANTOJO EL TEXTO!";
caja.style.background = "red";
caja.style.padding = "20px";
caja.style.color = "white";
caja.className = "hola";


// Conseguir elementos por su etqieuta

var todosLosDivs = document.getElementsByTagName('div');

/* ar contenidoEnTexto = todosLosDivs[2];
contenidoEnTexto.innerHTML = "Otro texto para el segundo elemento";
contenidoEnTexto.style.background = "red"; */

// todosLosDivs.forEach((valor, indice) => {

var valor;
for(valor in todosLosDivs){
    if(typeof todosLosDivs[valor].textContent == 'string'){
    var parrafo = document.createElement("p");
    var texto = document.createTextNode(todosLosDivs[valor].textContent);
    parrafo.append(texto);
    seccion.append(parrafo);
    }
}
seccion.append(hr);

// Conseguir elementos por su clase css
comsole.log(caja);


