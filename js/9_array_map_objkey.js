////// Array y .map

const carrito = ["Producto 1", "Producto 2", "Producto 3"];
console.log(carrito);

const appContenedor = document.querySelector("#app");
// appContenedor.innerHTML = carrito;

//// .forEach()

// let html = "";
// carrito.forEach(producto => {
//     html += `<li>${producto}</li>`;
// });

// appContenedor.innerHTML = html;

//// .map(): conserva el array original y devuelve un nuevo array


const carritoNuevo = carrito.map(producto => {
    return `El producto es ${producto}`;    
});

console.log(carritoNuevo);
console.log(carrito);

// es recomendable siempre trabajar sobre una copia de un array, no sobreescribirlo

////// Object Keys

const persona = {
    nombre: "Juan",
    profesion: "Desarrollador Web",
    edad: 29
}

console.log(Object.keys(persona));

// extrae el valor de las llaves, muy util para comprobar si una llave existe en un objeto 
