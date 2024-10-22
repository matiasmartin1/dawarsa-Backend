const multer = require('multer');
const path = require('path');

// Configuración del almacenamiento
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

// Validar tipo de archivo
const fileFilter = (req, file, cb) => {
    const filetypes = /jpeg|jpg|png/;
    const mimetype = filetypes.test(file.mimetype); // Validar mimetype
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase()); // Validar extensión

    if (mimetype && extname) {
        return cb(null, true);
    }
    cb(new Error("Solo se permiten archivos .jpg, .jpeg, o .png"));
};

// Configurar límite de tamaño (ej. 2MB)
const upload = multer({
    storage,
    limits: { fileSize: 2 * 1024 * 1024 }, // 2MB en bytes
    fileFilter,
});

module.exports = upload;
