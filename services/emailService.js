const nodemailer = require('nodemailer');
require('dotenv').config();

const sendEmail = async ({ name, email, message }) => {
    let transporter = nodemailer.createTransport({
        host: 'smtp.mail.yahoo.com',
        port: 465,  // Puerto de SMTP seguro
        secure: true, // Usa TLS
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        }
    });

    let mailOptions = {
        from: process.env.EMAIL_USER,
        to: 'matiasjmartinn@gmail.com',
        subject: 'Dawarsa',
        text: `Nombre: ${name}\nCorreo: ${email}\nMensaje: ${message}`,
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('Correo enviado');
    } catch (error) {
        console.error('Error al enviar el correo:', error);
    }
};

module.exports = { sendEmail };