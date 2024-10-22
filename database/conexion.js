const { Sequelize } = require('sequelize');

// Configuración de Sequelize
const sequelize = new Sequelize('dawarsadb', 'root', 'pwd_root', {
    host: '127.0.0.1',
    dialect: 'mysql',
    port: 3307
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