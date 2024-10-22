const Imagen = require('../models/imageModel');
const path = require('path');


const getAllImages = async (req, res) => {
    try {
      const imagenes = await Imagen.findAll()
      res.json(imagenes)
    } catch (error) {
      console.error('Error al obtener imagenes:', error);
      res.status(500).json({ error: 'Error al obtener imagenes' });
    }
}

const uploadImage = async (req, res) => {
  try {
    // Si multer rechaza el archivo, el middleware lanzará un error antes de llegar aquí
    const { filename } = req.file;
    const url_imagen = path.join('uploads', filename).replace(/\\/g, '/');

    const newImage = await Imagen.create({
      url_imagen, 
      titulo_imagen: req.body.titulo_imagen,
      id_usuario: req.body.id_usuario,
    });

    return res.status(201).json(newImage);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error al subir la imagen' });
  }
};

module.exports = {
  getAllImages,
  uploadImage
}