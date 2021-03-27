////// Promesas con Ajax

const descargarUsuarios = cantidad => new Promise((resolve, reject) => {

    // pasar la cantidad a la API
    const api = `https://randomuser.me/api/?results=${cantidad}&nat=us`;

    // llamado a ajax
    const xhr = new XMLHttpRequest();

    // abrir la coneccion
    xhr.open('GET', api, true);

    // on load
    xhr.onload = () => {
        if (xhr.status === 200) {
            resolve(JSON.parse(xhr.responseText).results);
        } else {
            reject(Error(xhr.statusText));
        }
    }

    // opcional (on error)
    xhr.onerror = error => reject(error);

    // send
    xhr.send();
})

descargarUsuarios(30)
    .then(
        miembros => imprimirHTML(miembros),
        error => console.error(
            new Error("Hubo un error" + error)
        )
    )

//// Mostrando el resultado en el html

function imprimirHTML(usuarios) {
    let html = "";
    usuarios.forEach(usuario => {
        html += `
            <li>
                Nombre: ${usuario.name.first} ${usuario.name.last}
                Pais: ${usuario.nat}
                Imagen: 
                    <img src="${usuario.picture.medium}">
            </li>
        `;       
    });

    const contendorApp = document.querySelector("#app");
    contendorApp.innerHTML = html;
}
