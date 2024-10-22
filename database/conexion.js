const { Sequelize } = require('sequelize');

// Configuración de Sequelize
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    port: process.env.DB_PORT
});

(async () => {
    try {
        await sequelize.authenticate();
        console.log('Conexión a la base de datos exitosa');
    } catch (error) {
        console.error('Error al conectar a la base de datos:', error);
    }
})();

module.exports = sequelize;