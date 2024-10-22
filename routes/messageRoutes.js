const express = require('express');
const router = express.Router();
const { handleContactForm } = require('../controllers/messageController');
const { validateEmailData } = require('../middlewares/validateEmail');

router.post('/send-message', validateEmailData ,handleContactForm);

module.exports = router;
