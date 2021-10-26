const express = require('express');
const testController = require('../controllers/test_controller');
const router = express.Router();

router.get('/' ,testController.home );
router.post('/create' , testController.create)
router.get('/create/add-question' , testController.question)
router.post('/create/save-question' , testController.saveQuestion);
router.post('/create/save-test' ,testController.saveTest )

module.exports = router;