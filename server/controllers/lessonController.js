const Lesson = require('../models/lessonModel.js');

const LessonController = {
  // Create a new lesson
  createLesson: async (req, res) => {
    try {
      const { name, classId, date, description } = req.body;
      
      // Check if classId exists and is valid
      // You may want to validate classId against existing classes in the database
      
      const lesson = new Lesson({
        name,
        class: classId,
        date,
        description,
      });

      const savedLesson = await lesson.save();
      res.status(201).json(savedLesson);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // Get all lessons
  getAllLessons: async (req, res) => {
    try {
      const lessons = await Lesson.find();
      res.json(lessons);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // Get a single lesson by ID
  getLessonById: async (req, res) => {
    try {
      const lesson = await Lesson.findById(req.params.id);
      if (!lesson) {
        return res.status(404).json({ message: 'Lesson not found' });
      }
      res.json(lesson);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // Update a lesson
  updateLesson: async (req, res) => {
    try {
      const { name, classId, date, description } = req.body;
      const lesson = await Lesson.findById(req.params.id);
      if (!lesson) {
        return res.status(404).json({ message: 'Lesson not found' });
      }

      // Check if classId exists and is valid
      // You may want to validate classId against existing classes in the database
      
      lesson.name = name;
      lesson.class = classId;
      lesson.date = date;
      lesson.description = description;

      const updatedLesson = await lesson.save();
      res.json(updatedLesson);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // Delete a lesson
  deleteLesson: async (req, res) => {
    try {
      const lesson = await Lesson.findById(req.params.id);
      if (!lesson) {
        return res.status(404).json({ message: 'Lesson not found' });
      }
      await lesson.remove();
      res.json({ message: 'Lesson deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
};

module.exports = LessonController;
