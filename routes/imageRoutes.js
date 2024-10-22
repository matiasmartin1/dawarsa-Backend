const express =  require('express');
const { getAllImages, uploadImage } = require('../controllers/imageController.js');
const upload = require ('../middlewares/upload.js');

const router = express.Router();

router.get('/images', getAllImages);
router.post('/upload', upload.single('imagen'), uploadImage);

module.exports = router;