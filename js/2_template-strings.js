////// TEMPLATE STRINGS

const nombre = "Tomás";
const trabajo = "Desarrollador Web";

// Concatenacion

// console.log("Nombre: " + nombre + " ,Trabajo: " + trabajo);

console.log(`Nombre: ${nombre} , Trabajo: ${trabajo}`);

// Contanecion en multiples lineas

const contenedorApp = document.querySelector('#app');

// let html = '<ul>' +
//                 '<li>Nombre: ' + nombre + '</li>' + 
//                 '<li>Trabajo: ' + trabajo + '</li>' +
//             '</ul>';

let html = `<ul>
                <li>Nombre: ${nombre}</li>
                <li>Trabajo: ${trabajo}</li>
            </ul>    
`;

contenedorApp.innerHTML = html;