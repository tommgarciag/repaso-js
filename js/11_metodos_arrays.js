// METODOS DISPONIBLES EN ARRAYS

// .filter()

const personas = [
    {nombre: "Juan", edad: 23, aprendiendo: "JavaScript"},
    {nombre: "Tomas", edad: 29, aprendiendo: "ReactJS"},
    {nombre: "Alejo", edad: 19, aprendiendo: "AdobeXD"},
    {nombre: "Sofia", edad: 27, aprendiendo: "Python"},
    {nombre: "Ester", edad: 35, aprendiendo: "PHP"}
];

console.log(personas);

// para hacer una busqueda

// filtar mayores de 28 años

// con .filter() puedo acceder a cada persona individualmente

const mayores = personas.filter(persona => {
    return persona.edad > 28;
})

console.log(mayores);

// con .find() podemos buscar dentro del array alguna persona determinada 

// ¿Que esta aprendiendo Alejo y su edad?

const alejo = personas.find(persona => {
    return persona.nombre === "Alejo";
})

console.log(`Alejo esta aprendiendo ${alejo.aprendiendo} y su edad es ${alejo.edad} años.`);

// con .reduce() podemos saber el total de las edad de las personas

let total = personas.reduce((edadTotal, persona) => {
    return edadTotal + persona.edad;
}, 0);

console.log(total);

// promedio de edad

console.log(total / personas.length);