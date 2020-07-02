'use strict'

function porConsola(numero1, numero2) {
        console.log("Suma: " + (numero1+numero2));
        console.log("Resta: " + (numero1-numero2));
        console.log("multiplicación: " + (numero1*numero2));
        console.log("División: " + (numero1/numero2));
        console.log("************************************")
}

function porPantalla(numero1, numero2){
        document.write("Suma: " + (numero1+numero2) + "<br/>");
        document.write("Resta: " + (numero1-numero2) + "<br/>");
        document.write("multiplicación: " + (numero1*numero2) + "<br/>");
        document.write("División: " + (numero1/numero2) + "<br/>");
        document.write("************************************")
}

function calculadora(numero1, numero2, mostrar = false){
        if(mostrar == false){
        porConsola(numero1, numero2);
        } else {
        porPantalla(numero1, numero2);
        }
        return  true;
}
calculadora(1, 4);
calculadora(1, 5, true);

/*
for(var i = 1; i <= 10; i++){
    console.log(i);
    calculadora(i, 8);
}
*/