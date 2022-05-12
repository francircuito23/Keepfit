//Requerimos mongoose
const { Schema, model } = require('mongoose');

//Creamos nuestro modelo de usuario
const AlimentoSchema = Schema({
    nombre: {
        type: String
    },
    tipo: {
        type: String
    },
    gramos: {
        type: String
    },
    img: {
        type: String,
        default: 'http://becas-mexico.mx/wp-content/themes/swift/images/default.png'
    },
})

module.exports = model('Alimento', AlimentoSchema);