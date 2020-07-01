'use strict'

// Funciones
// Una función es una agrupación reutilizable de un conjunto de instrucciones.

function calculadora(numero1, numero2, mostrar = false){
    //Conjunto de instrucciones a ejecutar.
    
    if(mostrar == false){
        console.log("Suma: " + (numero1+numero2));
        console.log("Resta: " + (numero1-numero2));
        console.log("multiplicación: " + (numero1*numero2));
        console.log("División: " + (numero1/numero2));
        console.log("************************************")
    } else {
        document.write("Suma: " + (numero1+numero2) + "<br/>");
        document.write("Resta: " + (numero1-numero2) + "<br/>");
        document.write("multiplicación: " + (numero1*numero2) + "<br/>");
        document.write("División: " + (numero1/numero2) + "<br/>");
        document.write("************************************")
    }
    
    //return "Hola, soy la calculadora!! Escribe dos números -separados por una coma- dentro de los paréntesis de la función y lo calcularé por ti 🙂";
}

//Invocar o llamar a la función.
calculadora(1, 4);
calculadora(1, 5, true);

/*
for(var i = 1; i <= 10; i++){
    console.log(i);
    calculadora(i, 8);
}
*/