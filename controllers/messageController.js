const { saveMessage } = require('../services/messageService');
const { sendEmail } = require('../services/emailService');
const { sequelize } = require('../models/messageModel');

const handleContactForm = async (req, res) => {
    const transaction = await sequelize.transaction();

    try {
            
            const { name: nombre_emisor, email: correo_emisor, message: mensaje } = req.body;

        const nuevoMensaje = await saveMessage(
            { nombre_emisor, correo_emisor, mensaje },
            transaction
        );
  
        await sendEmail({ name: nombre_emisor, email: correo_emisor, message: mensaje });

        await transaction.commit();

        res.status(201).json({
            message: 'Mensaje guardado y correo enviado exitosamente',
            data: nuevoMensaje,
        });
    } catch (error) {
        await transaction.rollback();
        res.status(500).json({ message: 'Error en el proceso', error });
    }
};

module.exports = { handleContactForm };
