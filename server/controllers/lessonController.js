const Lesson = require("../models/lessonModel.js");

const LessonController = {
  // Create a new lesson
  createLesson: async (req, res) => {
    const { name, classId, date, description } = req.body;
    try {
      // Check if classId exists and is valid
      // You may want to validate classId against existing classes in the database

      const lesson = new Lesson.create({
        name,
        class: classId,
        date,
        description,
      });

      res.status(201).json(lesson);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  // Get all lessons
  getAllLessons: async (req, res) => {
    try {
      const lessons = await Lesson.find({}).sort({ createdAt: -1 });
      res.status(200).json(lessons);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  // Get a single lesson by ID
  getLessonById: async (req, res) => {
    const { id } = req.params;
    try {
      const lesson = await Lesson.findById(id);
      if (!lesson) {
        return res.status(404).json({ message: "Lesson not found" });
      }
      res.status(200).json(lesson);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  // Update a lesson
  updateLesson: async (req, res) => {
    try {
      const { name, classId, date, description } = req.body;
      const lesson = await Lesson.findById(req.params.id);
      if (!lesson) {
        return res.status(404).json({ message: "Lesson not found" });
      }

      // Check if classId exists and is valid
      // You may want to validate classId against existing classes in the database

      lesson.name = name;
      lesson.class = classId;
      lesson.date = date;
      lesson.description = description;

      const updatedLesson = await lesson.save();
      res.status(200).json(updatedLesson);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  // Delete a lesson
  deleteLesson: async (req, res) => {
    const { id } = req.params;
    try {
      const lesson = await Lesson.findById(id);
      if (!lesson) {
        return res.status(404).json({ message: "Lesson not found" });
      }
      await lesson.findOneAndDelete({ _id: id });
      res.status(200).json({ message: "Lesson deleted successfully" });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
};

module.exports = LessonController;
