const express = require('express');
const authController = require('../controller/authController');
const appointmentController = require('../controller/appointmentController');

const router = express.Router();

router.use(authController.protect);


router.get('/', appointmentController.getAllAppointment);
router.post('/', appointmentController.createAppointment);
router.get('/:id', appointmentController.getAppointment);
router.patch('/:id',authController.restrictTo('receptionist'), appointmentController.updateAppoint);


module.exports = router;