const Mensajes = require('../models/messageModel');

const saveMessage = async ({ nombre_emisor, correo_emisor, mensaje }, transaction) => {
    const nuevoMensaje = await Mensajes.create({
        nombre_emisor,
        correo_emisor,
        mensaje,
    }, { transaction });
    return nuevoMensaje;
};

module.exports = { saveMessage };