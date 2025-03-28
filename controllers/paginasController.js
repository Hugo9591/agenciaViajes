import { Viaje } from '../models/Viaje.js'
import { Testimonial } from '../models/testimoniales.js';

const paginaInicio = async (req, res) => {

    //Consultar 3 viajes del modelo de viaje

    const promiseDB = [];

    promiseDB.push(Viaje.findAll({limit: 3}));       //[0]
    promiseDB.push(Testimonial.findAll({limit: 3})); //[1]
    try { 
        const resultado = await Promise.all( promiseDB );//para quese ejecuten al mismo tiempo

        res.render('inicio', {
        pagina : 'Inicio',
        clase: 'home',
        viajes: resultado[0], 
        testimoniales: resultado[1]
        });
    } catch (error) {
        console.log(error);
    }
    
}

const paginaNosotros = (req, res) => {
    res.render('nosotros', {
        pagina : 'Nosotros'
    });
}

const paginaViajes = async (req, res) => {
    //Consultar BD
    const viajes = await Viaje.findAll();//findAll trae todos los resultados que haya en la tabla

    //console.log(viajes);
    //Mandamos resultado a la vista viajes.pug
    res.render('viajes', {
        pagina : 'Proximos Viajes',
        viajes
    });
}

const paginaTestimoniales = async (req, res) => {
    try {
        const testimoniales = await Testimonial.findAll();
        
        res.render('testimoniales', {
        pagina : 'Testimoniales',
        testimoniales//pasamos todos los testimoniales a la vista
        });
    } catch (error) {
        console.log(error);
    }
    
}

//Muestra un viaje por su slug
const paginaDetalleViajes = async (req, res) => {
    const { slug } =  req.params;//params se asocia mucho con el comodin de index.js routers, contiene parametros de una url dinamica, valores definidos con :
    console.log(slug)//viaje-italia, viaje-canada.....

    try {
        const viaje = await Viaje.findOne({ where : { slug }});

        res.render('viaje', {
            pagina: 'Infomacion Viaje',
            viaje
        })
    } catch (error) {
        console.log(error);
    }
}

export{
    paginaInicio,
    paginaNosotros,
    paginaViajes, 
    paginaTestimoniales,
    paginaDetalleViajes
}