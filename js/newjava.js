"use strict";

var forma = document.getElementById("forma"),
        salida = document.getElementById("salida");
forma.addEventListener("submit", procesa, false);

function procesa (){
    var Boleta = forma["Boleta"].value, 
       Nombre = forma ["nombre"].value,
       Grupo = forma ["Grupo"].value,
       Materia = forma ["Materia"].value,
       Fecha = new Date(forma ["fecha"].value).toGMTString();
       salida.textContent = " Boleta: " + Boleta + ",  Nombre: " + Nombre + ",   Grupo: " + Grupo + " ,  Materia: " + Materia + ",    Fecha: " + Fecha;
}
