////// PROMESAS

// Cuando realizar un llamado asincrono a una API hay dos opciones, que el codigo funcione o que el llamado a la API falle. Con las promesas podemos manejar estos dos escenarios.

const aplicarDescuento = new Promise((resolve, reject) => {
    setTimeout(() => {
        let descuento = false;

        if (descuento) {
            resolve("Descuento aplicado");
        } else {
            reject("No se pudo aplicar el descuento.");
        }
    }, 3000);
});

aplicarDescuento.then(resultado => {
    console.log(resultado);
}).catch(error => {
    console.log(error);
});