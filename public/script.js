/*
Módulo de registro de productos
*/

document
.getElementById("formulario")
.addEventListener("submit", async (e) => {

e.preventDefault();

const producto = {
    nombre: document.getElementById("nombre").value,
    descripcion: document.getElementById("descripcion").value,
    precio: document.getElementById("precio").value
};

const respuesta = await fetch(
    "/productos",
    {
        method: "POST",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify(producto)
    }
);

const datos = await respuesta.json();

alert(datos.mensaje);

});