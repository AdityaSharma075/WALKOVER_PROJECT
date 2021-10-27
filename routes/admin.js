const express = require('express');
const passport = require('passport');
const adminController = require('../controllers/admin_controller');
const otpController = require('../controllers/otp_controller');
const router = express.Router();


router.get('/', adminController.home);
router.get('/log-out' , adminController.destroySession)
router.post('/send-otp' , otpController.sendOtp);
router.post('/verify',passport.authenticate( 'otp', {failureRedirect: '/admin'}) , otpController.verify );
router.post('/sign-in' ,passport.authenticate( 'local', {failureRedirect: '/admin'}) ,adminController.signIn  )


module.exports = router;