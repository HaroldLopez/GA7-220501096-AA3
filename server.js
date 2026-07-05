/*
Autor: Harold López
Evidencia: GA7-220501096-AA3-EV01

Módulo de gestión de productos
SkinCareApp
*/

const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

/*
Configuración de la conexión con MariaDB
*/

const conexion = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1078266148",
    database: "skincareapp"
});

/*
Conexión al servidor de base de datos
*/

conexion.connect((error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Base de datos conectada");
    }
});

/*
Ruta POST para registrar un producto nuevo
*/
app.post("/productos", (req, res) => {

    const {nombre, descripcion, precio} = req.body;

    const sql = `
    INSERT INTO productos
    (nombre, descripcion, precio)
    VALUES (?, ?, ?)
    `;

    conexion.query(
        sql,
        [nombre, descripcion, precio],
        (error, resultado) => {

            if (error) {
                res.status(500).json(error);
            } else {
                res.json({
                    mensaje: "Producto registrado correctamente"
                });
            }
        }
    );
});

/*
Inicio del servidor
*/

app.listen(3000, () => {
    console.log("Servidor ejecutándose en puerto 3000");
});