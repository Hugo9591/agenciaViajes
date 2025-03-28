//const express = require('express');
import express from 'express';//tienes que usar type:module en el package para que funcione el import/export
import router from './Routes/index.js';
import db from './config/db.js'

const app = express();//express tiene una funcion para ejecutar express

//Conectar base de datos
db.authenticate()
    .then(() => console.log('Base de Datos conectada') )
    .catch( error => console.log(error)
    )

//Definir puertrto
const port = process.env.PORT || 4000;

//Habilitar PUG
app.set('view engine', 'pug');

//Usar middleware para obtener año actual
app.use( ( req, res, next ) => {//Siempre que se manda una peticion a la pag principal siempre lleva un request y un response
    const year = new Date();

    //locals para pasar valores de un archivo a otro res.locals.nombreVariable = valor
    res.locals.actualYear = year.getFullYear();
    res.locals.nombreSitio = 'Agencia de Viajes';

    return next();//El return next obliga a pasar al siguiente middleware
});

//Agregar body parser para leer los datos del formulario
app.use(express.urlencoded({extended: true}))

//Definir la carpeta public 
app.use(express.static('public'));

//Agregar router
app.use('/', router);

//Con la funcion listen() arranca el servidor y le pasas el puerto sobre el cual quieres ejecutar
app.listen(port, () => {
    console.log(`El servidor esta funcionando en el puerto ${port}`)
});