// SPREAD OPERATOR ...

// nos permite combinar dos array diferentes

let lenguajes = ["JavaScript", "PHP", "Python"];
let frameworks = ["ReactJS", "Laravel", "Django"];

//// unir los arreglos en 1 solo

// version anterior
// let combinacion = lenguajes.concat(frameworks);
// console.log(combinacion);

// version ES6+
// let combinacion = [...lenguajes,...frameworks];
// console.log(combinacion);

//// crear copias de arrays
// let nuevaLenguajes = [...lenguajes];
// console.log(nuevaLenguajes);

// let [ultimo] = lenguajes.reverse();

// console.log(lenguajes);
// console.log(ultimo);

// al utilizar reverse() observo como modifico el arreglo original y quedo al reves, para evitar esto utilizar spread 

let [ultimo] = [...lenguajes].reverse();

console.log(lenguajes);
console.log(ultimo);

// nota como obtengo el ultimo pero el arreglo original no cambia. Esto pasa porque spread crea una copia del arreglo original

//// otros usos del spread

function suma(a,b,c) {
    console.log(a+b+c);
}

const numeros = [1,2,3];
// suma(numeros);
suma(...numeros);