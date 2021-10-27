const express = require('express');
const testController = require('../controllers/test_controller');
const router = express.Router();
const passport = require('passport');

router.get('/' ,testController.home );
router.get('/view/:id',passport.checkAuthentication,testController.view);
router.get('/start/:id',testController.start);
router.get('/start-exam/:id' , testController.startExam)
router.post('/submit' , testController.Submit)
router.post('/create' , passport.checkAuthentication,testController.create)

router.post('/create/save-question' ,passport.checkAuthentication, testController.saveQuestion);
// router.post('/create/save-test' ,passport.checkAuthentication,testController.saveTest )

module.exports = router;