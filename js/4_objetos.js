////// OBJETOS EN JAVASCRIPT

//// OBJECT LITERAL: objetos estaticos

const persona = {
    nombre: "Tomás",
    profesion: "Desarrolador Web",
    edad: 29,
    esCasado: false
}

const persona2 = {
    nombre: "Juan",
    profesion: "Soporte IT",
    edad: 45,
    esCasado: true
}

console.log(persona);

// Acceder a las propiedades del objeto 
console.log(persona.nombre);
console.log(persona.profesion);

console.log(persona2);

//// OBJECT CONSTRUCTOR: nos permite crear objetos dinamicos con distintos valores

function Tarea(nombre, urgencia) {
    this.nombre = nombre;
    this.urgencia = urgencia;
} 

// Crear una nueva tarea:
const tarea1 = new Tarea("Aprender JavaScript", "Urgente");
console.log(tarea1);

const tarea2 = new Tarea("Preparar café", "Urgente");
console.log(tarea2);

const tarea3 = new Tarea("Pasear el perro", "Media");
console.log(tarea3);

