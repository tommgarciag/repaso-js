////// FUNCIONES EN JAVASCRIPT

// Una funcion nos va a permitir crear codigo que podamos reutilizar. Pasandole parámetros podemos crear funciones inteligentes.

// FUNCTION DECLARATION:

saludar("Roberto");

function saludar(nombre) {
    console.log(`Bienvenido/a ${nombre}`);
}

saludar("Carlos");

saludar("Mirta");

// En el caso de las function declaration como el codigo js corre en dos partes, primero detecta cuantas funciones hay en el documento y luego las ejecuta. Entonces no importa que el llamado a la funcion este antes o despues de su declaracion.

// FUNCTION EXPRESSION:

// cliente("Jesus"); // error

const cliente = function(nombreCliente) {
    console.log(`Mostrando datos del cliente: ${nombreCliente}`);
}

cliente("Juan Carlos");
cliente("Alejandro");

// Con las function expression no podemos hacer esto. Siempre debemos declarar la funcion antes de llamarla.

////// PARAMETROS POR DEFAULT

// FUNCTION DECLARATION;

// function actividad (nombre = "Walter White", actividad = "Ensañar quimica") {
//     console.log(`La persona ${nombre} esta realizando la actividad ${actividad}`);
// }

// actividad("Juan", "Aprender JavaScript");
// actividad("Pedro", "Creando un sitio web");
// actividad("Antonio"); 
// actividad(); 

// FUNCTION EXPRESSION:

const actividad = function(nombre = "Walter White", actividad = "Ensañar quimica") {
    console.log(`La persona ${nombre} esta realizando la actividad ${actividad}`);
}

actividad("Juan", "Aprender JavaScript");
actividad("Pedro", "Creando un sitio web");
actividad("Antonio"); 
actividad(); 

////// ARROW FUNCTIONS

// let viajando = function(destino) {
//     return `Viajando a la ciudad de ${destino}`;
// }

// CON UN ARGUMENTO: no requiere parentesis

// let viajando = destino => { 
//     return `Viajando a la ciudad de ${destino}`;
// }

// let viaje = viajando("Paris");

// CON MAS ARGUMENTOS

// let viajando = (destino, duracion) => { 
//     return `Viajando a la ciudad de ${destino} por ${duracion}`;
// }

// También podemos eliminar el return y las llaves, ya que se da por implicido que la funcion retorna un valor.

let viajando = (destino, duracion) => `Viajando a la ciudad de ${destino} por ${duracion}`;

viaje = viajando("Londres", "9 días");
console.log(viaje);