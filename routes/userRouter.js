const express = require('express');

const userController = require('../controller/userController');
const authController = require('../controller/authController');

const router = express.Router();

router.post('/signup',authController.signup);
router.post('/login',authController.login);
router.get('/logout',authController.logout);

// router.patch('/resetPassword/:token',authController.resetPassword);
// router.post('/forgotPassword',authController.forgotPassword);
router.get('/doctors',userController.getAllUser);
router.get('/doctors/:id',userController.getUser);


//logged in area
router.use(authController.protect);

// router.patch('/updatePassword',authController.updatePassword);
// router.patch('/updateMe',userController.updateUserPhoto,userController.resizeUserPhoto,userController.updateMe);
// router.delete('/deleteMe',userController.deleteMe);
// router.get('/me',userController.getMe,userController.getUser);


//restict to admin
//router.use(authController.restictTo('admin'));

router.route('/').get(userController.getAllUser).post(authController.signup);
router.route('/:id').get(userController.getUser);
router.patch('/updateMe',userController.updateUserPhoto,userController.resizeUserPhoto,userController.updateMe);

module.exports = router;