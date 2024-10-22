const validateEmailData = (req, res, next) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ message: 'Todos los campos son obligatorios' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ message: 'Correo inválido' });
    }

    next();
};

module.exports = { validateEmailData };