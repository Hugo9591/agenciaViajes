import express from 'express';

import { 
    paginaInicio, 
    paginaNosotros, 
    paginaViajes,
    paginaTestimoniales,
    paginaDetalleViajes 
} from '../controllers/paginasController.js';

import { guardarTestimonial } 
from '../controllers/testimonialController.js';

const router = express.Router();//Misma instacia de express pero usando su router

router.get('/', paginaInicio);

router.get('/nosotros', paginaNosotros);

router.get('/viajes', paginaViajes);

// :slug es un comodin, como una variable y asi como se nombre se usara en otros lados, para que cambie segun donde se dio click bloque_viaje   slug: viaje-canada, viaje-italia ...
router.get('/viajes/:slug', paginaDetalleViajes);

router.get('/testimoniales', paginaTestimoniales);//get ver testimonialess
router.post('/testimoniales', guardarTestimonial)//post enviar informacion

export default router;