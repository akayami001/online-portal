const Grade = require("../models/gradeModel.js");
const mongoose = require("mongoose");

const GradeController = {
  // Create a new grade
  createGrade: async (req, res) => {
    try {
      const { studentId, lessonId, grade } = req.body;

      // Check if studentId and lessonId exist and are valid
      // You may want to validate them against existing students and lessons in the database

      const newGrade = new Grade({
        student: studentId,
        lesson: lessonId,
        grade
      });

      const savedGrade = await newGrade.save();
      res.status(201).json(savedGrade);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // Get all grades
  getAllGrades: async (req, res) => {
    try {
      const grades = await Grade.find();
      res.json(grades);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // Get grades by student ID
  getGradesByStudentId: async (req, res) => {
    try {
      const studentId = req.params.studentId;
      const grades = await Grade.find({ student: studentId });
      res.json(grades);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // Get grades by lesson ID
  getGradesByLessonId: async (req, res) => {
    try {
      const lessonId = req.params.lessonId;
      const grades = await Grade.find({ lesson: lessonId });
      res.json(grades);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // Update a grade
  updateGrade: async (req, res) => {
    try {
      const { grade } = req.body;
      const gradeId = req.params.id;

      const updatedGrade = await Grade.findByIdAndUpdate(
        gradeId,
        { grade },
        { new: true }
      );

      if (!updatedGrade) {
        return res.status(404).json({ message: 'Grade not found' });
      }

      res.json(updatedGrade);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // Delete a grade
  deleteGrade: async (req, res) => {
    try {
      const gradeId = req.params.id;
      const deletedGrade = await Grade.findByIdAndDelete(gradeId);
      
      if (!deletedGrade) {
        return res.status(404).json({ message: 'Grade not found' });
      }

      res.json({ message: 'Grade deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
};

module.exports = GradeController;