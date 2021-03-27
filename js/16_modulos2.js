// PARA PODER TRABAJAR CON EL CODIGO EXPORTADO DESDE EL ARCHIVO 16_modulos.js DEBEMOS IMPORTARLO EN ESTE OTRO ARCHIVO

// DEBEMOS AGREGAR EL type="module" AL ARCHIVO 

import {nombreTarea, crearTarea, tareaCompletada} from "./16_modulos.js";

// con export default no necesito las llaves

// con export default no hace falta que nos nombre coincidan

// import cualquierNombre from "./16_modulos.js";

console.log(nombreTarea);

// si importa la variable directamente si debe llevar llaves y ocupar el mismo nombre

const tarea1 = crearTarea(nombreTarea, "Alta");
console.log(tarea1);
tareaCompletada();
