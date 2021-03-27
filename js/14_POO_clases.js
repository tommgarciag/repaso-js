////// PROGRAMACION ORIENTADA A OBJETOS

// CLASS

// Una clase es un plano del cual se crean objetos

class Tarea {
    constructor(nombre, prioridad) {
        this.nombre = nombre;
        this.prioridad = prioridad;
    }
    // metodos (funciones de una clase)
    mostar() {
        return `${this.nombre} tiene un prioridad ${this.prioridad}.`;
    }
}

// crear los objetos (instancias)

let tarea1 = new Tarea("Aprender JavaScript", "Alta");
let tarea2 = new Tarea("Cortar el cesped", "Baja");
let tarea3 = new Tarea("Ir al gym", "Media");

// console.log(tarea1);
// console.log(tarea2);
// console.log(tarea3);


console.log(tarea1.mostar());
console.log(tarea2.mostar());
console.log(tarea3.mostar());

// añadir al html

let tareas = [tarea1, tarea2, tarea3];

let contendorApp = document.querySelector("#app");

let html = "";

tareas.forEach(tarea => {
    html += `<li>${tarea.mostar()}</li>`;
});

contendorApp.innerHTML = html;