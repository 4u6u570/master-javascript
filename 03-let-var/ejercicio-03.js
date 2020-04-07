'user strict'

// Pruebas con var y let

//PRUEBA CON VAR
var numero = 40;
console.log(numero); // valor 40

if(true){
    var numero = 50;
    console.log(numero); // valor 50
}

console.log(numero); // valor 50


//PRUEBA CON LET
var texto = "Curso JS Augusto Salazar";
console.log(texto); // valor "

if(true){
    let texto = "Curso Laravel 5";
    console.log(texto); // valor laravel 5
}

console.log(texto); // valor JS