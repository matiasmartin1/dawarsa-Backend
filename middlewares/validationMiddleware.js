const validateLogin = (req, res, next) => {
    const { nombre_usuario, contraseña_usuario } = req.body;

    console.log('Datos de login:', nombre_usuario, contraseña_usuario);

    if (!nombre_usuario || !contraseña_usuario) {
        return res.status(400).json({ message: 'Todos los campos son obligatorios' });
    }

    next();
};

module.exports = { validateLogin }