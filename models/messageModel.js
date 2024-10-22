const { DataTypes } = require('sequelize');
const sequelize = require('../database/conexion');

const Mensaje = sequelize.define('Mensajes', {
      id_mensaje: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      nombre_emisor: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      correo_emisor: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      mensaje: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      fecha_envio: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false
      }
    }, {
      tableName: 'Mensajes',
      timestamps: false 
    });
    
    module.exports = Mensaje;