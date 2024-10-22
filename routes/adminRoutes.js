const express = require('express');
const {  getAdmins, createAdmin, loginAdmin } = require ('../controllers/adminController.js');
const { validateLogin } = require('../middlewares/validationMiddleware.js');

const router = express.Router();

router.get('/admin', getAdmins)
router.post('/login', validateLogin, loginAdmin )
router.post('/crear-admin', createAdmin)

module.exports = router;
