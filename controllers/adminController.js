const Admin = require('../models/adminModel');

const getAdmins = async (req, res) => {
    try {
        const admins = await Admin.findAll();
        res.json(admins);
    } catch (error) {
        console.error('Error al obtener admins:', error);
        res.status(500).json({ error: 'Error al obtener admins' });
    }
};

const createAdmin = async (req, res) => {
    const { nombre_usuario, contraseña_usuario } = req.body;
    
    try {
        const nuevoAdmin = await Admin.create({
            nombre_usuario,
            contraseña_usuario
        });
        res.status(201).json(nuevoAdmin);
    } catch (error) {
        console.error('Error al crear admin:', error);
        res.status(500).json({ error: 'Error al crear admin' });
    }
};

const loginAdmin = async (req, res) => {
    try {

        const { nombre_usuario, contraseña_usuario } = req.body;

        const admin = await Admin.findOne({ where: { nombre_usuario } });


        if (!admin) {
            return res.status(404).json({ message: 'Usuario no encontrado', success: false });
        }

        const isPasswordValid = (contraseña_usuario === admin.contraseña_usuario); 
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Contraseña incorrecta', success: false });
        }

        res.status(200).json({ message: 'Inicio de sesión exitoso', success: true, admin });
    } catch (error) {
        res.status(500).json({ message: 'Error en el servidor', success: false, error });
    }
};


module.exports = {
    getAdmins,
    createAdmin,
    loginAdmin
};