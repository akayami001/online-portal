const express = require('express');
const router = express.Router();
const GradeController = require('../controllers/gradeController');

router.post('/grades', GradeController.createGrade);
router.get('/grades', GradeController.getAllGrades);
router.get('/grades/student/:studentId', GradeController.getGradesByStudentId);
router.get('/grades/lesson/:lessonId', GradeController.getGradesByLessonId);
router.put('/grades/:id', GradeController.updateGrade);
router.delete('/grades/:id', GradeController.deleteGrade);

module.exports = router;