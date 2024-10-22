const { DataTypes } = require('sequelize');
const sequelize = require('../database/conexion');


const Admin = sequelize.define('Usuarios', {
    id_usuario: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre_usuario: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    contraseña_usuario: {
        type: DataTypes.STRING(255),
        allowNull: false
    }
}, {
    tableName: 'Usuarios',
    timestamps: false
});

module.exports = Admin;
