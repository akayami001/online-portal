const express = require('express');
const router = express.Router();
const LessonController = require('../controllers/lessonController');

router.post('/lessons', LessonController.createLesson);
router.get('/lessons', LessonController.getAllLessons);
router.get('/lessons/:id', LessonController.getLessonById);
router.put('/lessons/:id', LessonController.updateLesson);
router.delete('/lessons/:id', LessonController.deleteLesson);

module.exports = router;
