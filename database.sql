/*
Autor: Harold López
Evidencia: GA7-220501096-AA4-EV03

Script de creación de la base de datos del proyecto SkinCareApp.
*/

-- Crear la base de datos
CREATE DATABASE skincareapp;

-- Seleccionar la base de datos
USE skincareapp;

-- Crear la tabla de productos
CREATE TABLE productos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    descripcion TEXT,
    precio DECIMAL(10,2) NOT NULL
);