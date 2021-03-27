// FUNCIONES EN UN OBJETO: como agregar métodos o funciones en un objeto

// const persona = {
//     nombre: "Juan",
//     trabajo: "Desarrollador Web",
//     edad: 29,
//     ocupado: true,
//     mostrarInformacion: function() {
//         console.log(`${this.nombre} es ${this.trabajo} y tiene ${this.edad} años.`);
//     }
// }

// persona.mostrarInformacion();

// con ES6+ no hace falta usar : funcion()

const persona = {
    nombre: "Juan",
    trabajo: "Desarrollador Web",
    edad: 29,
    ocupado: true,
    mostrarInformacion() {
        console.log(`${this.nombre} es ${this.trabajo} y tiene ${this.edad} años.`);
    }
}

persona.mostrarInformacion();