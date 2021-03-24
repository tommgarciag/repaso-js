////// VARIABLES EN JAVASCRIPT

//// VAR

// var aprendiendo; // output: undefined
// aprendiendo = "JavaScript"; // le asigno un valor 
// aprendiendo = "React";
// aprendiendo = false;
// aprendiendo = 20;


//// CONST

// const aprendiendo; // error: la variable constante siempre debe tener un valor de inicio

// const aprendiendo = "JavaScript";
// aprendiendo = "React"; // error: las variables constantes no pueden cambiar su valor

// Uso común: para seleccionar elementos de la interfaz del sitio web


//// LET

// let aprendiendo;
// aprendiendo = "JavaScript";
// aprendiendo = true;

// console.log(aprendiendo);

/////// SCOPE: en que parte del programa una variable esta disponible o no

// var musica = "Rock";

// if (musica) {
//     var musica = "Grunge";
//     console.log("Dentro del if: ", musica);
// }

// console.log("Fuera del if: ", musica);

// Se esta reescribiendo la variable musica, esto en algunos casos no es lo deseado y puede traer comportamiento indeseado en el codigo.

// let musica = "Rock";

// if (musica) {
//     let musica = "Grunge";
//     console.log("Dentro del if: ", musica);
// }

// console.log("Fuera del if: ", musica);

// La variable musica dentro del bloque if tiene un comportamiento local al bloque. Fuera del if, la variable musica con el valor Grunge no existe, lee la variable con el valor "Rock".

const musica = "Rock";

if (musica) {
    const musica = "Grunge";
    console.log("Dentro del if: ", musica);
}

console.log("Fuera del if: ", musica);

// Con const sucede lo mismo, la variable viven dentro del bloque.



