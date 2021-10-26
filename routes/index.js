const express = require('express');
const homeController = require('../controllers/home_controller');
const router = express.Router();

router.get('/', homeController.home);
router.use('/admin' , require('./admin'));
router.use('/create-test' , require('./test'));

module.exports = router;