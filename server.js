const express = require('express');
const cors = require('cors');
const path = require('path');

const imageRoutes = require('./routes/imageRoutes.js');
const messageRoutes =  require('./routes/messageRoutes.js');
const adminRoutes = require('./routes/adminRoutes.js');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Configuración de CORS
const allowedOrigins = process.env.FRONTEND_URL || '*';
const corsOptions = {
  origin: allowedOrigins,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
};

app.use(cors(corsOptions));

// Rutas
app.use('/uploads', express.static('uploads'));
app.use('/api', imageRoutes);
app.use('/api', messageRoutes);
app.use('/api', adminRoutes);

// Configuración del puerto
const PORT = process.env.PORT || 3050;
app.listen(PORT, () => {
  console.log(`Servidor HTTP corriendo en el puerto ${PORT}`);
});
