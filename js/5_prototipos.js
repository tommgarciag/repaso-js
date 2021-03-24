////// PROTOTYPES 



const persona = {
    nombre: "Tomás",
    profesion: "Desarrolador Web",
    edad: 29,
    esCasado: false
}

// console.log(persona);
// const mostrarCliente = mostrarInfoSistema(persona.nombre, persona.profesion);
// console.log(mostrarCliente);


function Tarea(nombre, urgencia) {
    this.nombre = nombre;
    this.urgencia = urgencia;
}

// Agregar un protype a Tarea: este metodo esta atado a Tarea. no se puede acceder desde afuera

Tarea.prototype.mostrarInfoSistema = function () {
    return `La tarea ${this.nombre}, tiene un prioridad de ${this.urgencia}`;
}

const tarea1 = new Tarea("Aprender JavaScript", "Urgente");
console.log(tarea1);
// const mostrarInfo = mostrarInfoSistema(tarea1.nombre, tarea1.urgencia);
// console.log(mostrarInfo);

console.log(tarea1.mostrarInfoSistema());

