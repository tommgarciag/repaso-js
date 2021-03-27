// DESTRUCTURING DE OBJETOS: como extraer los valores de un objeto

const aprendiendoJS = {
    version: {
        nueva: "ES6+",
        anterior: "ES5"
    },
    frameworks: ["React", "VueJS", "AngularJS"]
}

console.log(aprendiendoJS);

// version anterior:
// let version = aprendiendoJS.version.nueva;
// let framework = aprendiendoJS.frameworks[1];
// console.log(version);
// console.log(framework);

// conforme el objeto se vuelva mas profundo mas complicado de extraer un valor

// version ES6+: Destructuring

// let {version, frameworks} = aprendiendoJS;
// console.log(version);
// console.log(frameworks);

let {nueva} = aprendiendoJS.version;
console.log(nueva);

// {nueva} se crea a partir de los valores que tenga el objeto, es decir tiene que tener el mismo nombre

// del lado derecho, accedemos al dato que queramos, donde aprendiendoJS es la variables y version es una propiedad objeto 
