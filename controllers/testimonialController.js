import { Testimonial } from "../models/testimoniales.js";

//Gguardar testimonial en la BD
const guardarTestimonial = async (req, res) => {
    //Validar campos
    const {nombre, correo, mensaje} = req.body;//req.body trae datos enviados en el cuerpo POST, PUT o PATCH

    const errores = [];

    if(nombre.trim() === ''){
        errores.push({mensaje: 'El nombre esta vacio'});//enviarlo a errores
    }
    
    if(correo.trim() === ''){
        errores.push({mensaje: 'El correo esta vacio'});
    }

    if(mensaje.trim() === ''){
        errores.push({mensaje: 'El mensaje esta vacio'});
    }

    if(errores.length > 0){

        //Consultar testimoniales existentes
        const testimoniales = await Testimonial.findAll();


        //Mostrar la vista con errores(vista, informacion)
        res.render('testimoniales', {
            pagina: 'Testimoniales',
            errores,
            nombre,
            correo,
            mensaje, 
            testimoniales
            // se le pasa nombre, correo y mensaje para no perder su valor si hay un campo vacio
        })
    }else{
        //Almacenarlo en la BD
        try {
            //Insertamos nuevo registro en la BD
            await Testimonial.create({
                nombre,
                correo,
                mensaje
            });
            res.redirect('/testimoniales');//redirect para terminar de  realizar la accion de guardar inf en la BD y lo envia a testimoniales get en index router
        } catch (error) {
            console.log(error)
        }
    }
}

export {
    guardarTestimonial
}