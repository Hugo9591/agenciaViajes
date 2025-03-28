import { Sequelize } from "sequelize";
import dotenv from 'dotenv';


dotenv.config();

//console.log(process.env.DATABASE)

//-----------VARIABLES DE ENTORNO   
//Una sola variable(servidor)
//const db = new Sequelize(process.env.DATABASE_URL, {

//mas de una variable(servidor)
// const db = new Sequelize('agenciaviajes', 'agencia', 'hugo+alonso', {
//    host: '127.0.0.1', 

const db = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    port: '3306',
    dialect: 'mysql',
    
    define: {
        timestamps: false
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    operatorAliases: false
});

export default db;