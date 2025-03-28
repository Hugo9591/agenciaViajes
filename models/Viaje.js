import { Sequelize } from "sequelize";
import db from '../config/db.js'

//Hacer consulta  a la BD
//viajes nombre de la tabla en la BD
export const Viaje = db.define('viajes', {
    //Si no se define una columna, la BD no traera esa columna
    titulo: {
        type: Sequelize.STRING
    },
    precio: {
        type: Sequelize.STRING
    },
    fecha_ida: {
        type: Sequelize.DATE
    },
    fecha_vuelta: {
        type: Sequelize.DATE
    },
    imagen: {
        type: Sequelize.STRING
    },
    descripcion: {
        type: Sequelize.STRING
    },
    disponibles: {
        type: Sequelize.STRING
    },
    slug: {
        type: Sequelize.STRING
    },
})