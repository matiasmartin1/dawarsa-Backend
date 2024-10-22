const { DataTypes } = require('sequelize');
const sequelize = require('../database/conexion');
const Admin = require('./adminModel');

const Imagen = sequelize.define('Imagenes', {
  id_imagen: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  url_imagen: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  titulo_imagen: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  id_usuario: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Usuarios',
      key: 'id_usuario'
    },
    onDelete: 'CASCADE'
  }
}, {
  tableName: 'Imagenes',
  timestamps: false
});


Admin.hasMany(Imagen, {
  foreignKey: 'id_usuario',
  sourceKey: 'id_usuario',
  onDelete: 'CASCADE'
});


Imagen.belongsTo(Admin, {
  foreignKey: 'id_usuario',
  targetKey: 'id_usuario'
});

module.exports = Imagen;
