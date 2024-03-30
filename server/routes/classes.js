const express = require('express');
const router = express.Router();
const ClassController = require('../controllers/classController');

router.post('/classes', ClassController.createClass);
router.get('/classes', ClassController.getAllClasses);
router.get('/classes/:id', ClassController.getClassById);
router.put('/classes/:id', ClassController.updateClass);
router.delete('/classes/:id', ClassController.deleteClass);

module.exports = router;