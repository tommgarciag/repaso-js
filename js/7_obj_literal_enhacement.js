// OBJECT LITERAL ENHACEMENT: al reves del destructuring, como colocar juntos los valores de un objeto

const banda = "Metallica";
const genero = "Heavy metal";
const canciones = ["Master Of Puppets", "Seek & Destroy", "Enter Sandman"];

// version anterior

// const metallica = {
//     banda: banda,
//     genero: genero,
//     canciones: canciones
// }

// console.log(metallica);

// version ES6+

const metallica = {banda, genero, canciones};

console.log(metallica);