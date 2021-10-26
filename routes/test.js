const express = require('express');
const testController = require('../controllers/test_controller');
const router = express.Router();

router.get('/' ,testController.createTest );

module.exports = router;