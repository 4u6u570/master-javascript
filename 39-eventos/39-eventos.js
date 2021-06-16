"use strict";

// Eeventos

window.addEventListener("load", () => {
  // Eventos del mouse

  var boton = document.querySelector("#boton");

  function cambiarColor() {
    var bg = boton.style.background;
    if (bg == "green") {
      boton.style.background = "red";
    } else {
      boton.style.background = "green";
    }

    boton.style.padding = "10px";
    boton.style.border = "1px solid #ccc";

    return true;
  }

  var boton = document.querySelector("#boton");

  // Evento Click

  boton.addEventListener("click", function () {
    cambiarColor();
  });

  // Mouse Over

  boton.addEventListener("mouseover", function () {
    boton.style.background = "yellow";
  });

  // Mouse Out

  boton.addEventListener("mouseout", function () {
    boton.style.background = "black";
  });

  // Focus

  var input = document.querySelector("#campo_nombre");

  input.addEventListener("focus", function () {
    console.log("[focus] Estás dentro del input");
  });

  // Blur

  input.addEventListener("blur", function () {
    console.log("[blur] Estás fuera del input");
  });

  // KeyDown

  input.addEventListener("keydown", function (event) {
    console.log(
      "[keydown] Pulsando esta tecla",
      String.fromCharCode(event.keyCode)
    );
  });

  // Keypress

  input.addEventListener("keypress", function (event) {
    console.log(
      "[keypress] Presionando esta tecla",
      String.fromCharCode(event.keyCode)
    );
  });

  // KeyUp

  input.addEventListener("keyup", function (event) {
    console.log("[keyup] Tecla soltada", String.fromCharCode(event.keyCode));
  });
});
