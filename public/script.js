/*
Autor: Harold López
Evidencia: GA7-220501096-AA4-EV03

Módulo encargado del registro de productos desde el formulario web.
*/

document
    .getElementById("formulario")
    .addEventListener("submit", async (e) => {

        // Evita que el formulario recargue la página
        e.preventDefault();

        // Obtiene la información ingresada por el usuario
        const producto = {
            nombre: document.getElementById("nombre").value,
            descripcion: document.getElementById("descripcion").value,
            precio: document.getElementById("precio").value
        };

        // Envía los datos al servidor mediante una petición POST
        const respuesta = await fetch("/productos", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(producto)
        });

        // Convierte la respuesta del servidor a formato JSON
        const datos = await respuesta.json();

        // Muestra el mensaje de confirmación
        alert(datos.mensaje);

    });