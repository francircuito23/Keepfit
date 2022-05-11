const { request, response } = require('express');

const Alimento = require('../../models/alimento_model');

const getAlimento = async (req = request, res = response) => {

    //Parámetros para visualizar un determinado número de usuarios
    const { limite = 4, desde = 0 } = req.query;

    const query = { state: true };

    const [total, alimento] = await Promise.all([
        Alimento.countDocuments(query),
        Alimento.find({}, {nombre: 1})
        .skip(Number(desde))
        .limit(Number(limite))
    ])

    let aaaa = 'puta';

    //Podemos ver los registros de los usuarios
    // res.json({
    //     total,
    //     alimento,
    // });

    res.render('masaMuscular', {
        nombre: aaaa
    })
}

//Exportamos nuestras funciones como objetos para usarlo en el directorio Routes
module.exports.getAlimento = getAlimento;