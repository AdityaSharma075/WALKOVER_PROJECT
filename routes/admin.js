const express = require('express');
const adminController = require('../controllers/admin_controller');
const router = express.Router();


router.get('/', adminController.login);

module.exports = router;