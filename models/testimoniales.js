import { Sequelize } from "sequelize";
import db from '../config/db.js'

//testimoniales nombre de la tabal en la BD
export const Testimonial = db.define('testimoniales', {
    //Si no se define una columna, la BD no traera esa columna
    nombre: {
        type: Sequelize.STRING
    },
    correo: {
        type: Sequelize.STRING
    },
    mensaje: {
        type: Sequelize.STRING
    }
})