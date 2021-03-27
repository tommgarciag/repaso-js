////// PROGRAMACION ORIENTADA A OBJETOS

// CLASE PADRE

class Tarea {
  constructor(nombre, prioridad) {
    this.nombre = nombre;
    this.prioridad = prioridad;
  }
  // metodos (funciones de una clase)
  mostar() {
    console.log (`${this.nombre} tiene un prioridad ${this.prioridad}.`);
  }
}

// HERENCIA

class ComprasPendientes extends Tarea {
  constructor(nombre, prioridad, cantidad) {
    // metodo super para hacer referencia al constructor padre
    super(nombre, prioridad);
    // nueva propiedad de la clase hijo
    this.cantidad = cantidad;
  }

  // tambien puedes reescribir el metodo de la clase padre, usando el mismo nombre

  mostar() {

    // sobreescribirlo
    // return `Comprar ${this.nombre} tiene un prioridad ${this.prioridad} y la cantidad de ${this.cantidad}.`;

    // heredar y agregar 
    super.mostar();
    console.log(`y la cantidad de ${this.cantidad}`);

  }

  // tambien puedes crear metodos nuevos
  saludar() {
    return "hola";
  }
}

// tareas (instancias)

let tarea1 = new Tarea("Aprender JavaScript", "Alta");
let tarea2 = new Tarea("Cortar el cesped", "Baja");
let tarea3 = new Tarea("Ir al gym", "Media");

// console.log(tarea1);
// console.log(tarea2);
// console.log(tarea3);

// console.log(tarea1.mostar());
// console.log(tarea2.mostar());
// console.log(tarea3.mostar());

// compras (instancias)

let compra1 = new ComprasPendientes("Fideos", "Urgente", 3);

console.log(compra1);

// Una vez que heradas una clase dentro de otro puedes usar los metodos de la clase padre

compra1.mostar();
console.log(compra1.saludar());
