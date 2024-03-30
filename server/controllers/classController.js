const ClassName = require("../models/classModel.js");


const ClassController = {
  // Create a new class
  createClass: async (req, res) => {
    try {
      const { name, teacherId, students, lessons } = req.body;

      // Check if teacherId exists and is valid
      // You may want to validate teacherId against existing users in the database

      const newClass = new ClassName({
        name,
        teacher: teacherId,
        students,
        lessons
      });

      const savedClass = await newClass.save();
      res.status(201).json(savedClass);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // Get all classes
  getAllClasses: async (req, res) => {
    try {
      const classes = await ClassName.find();
      res.json(classes);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // Get a single class by ID
  getClassById: async (req, res) => {
    try {
      const classId = req.params.id;
      const classObj = await ClassName.findById(classId);
      
      if (!classObj) {
        return res.status(404).json({ message: 'Class not found' });
      }

      res.json(classObj);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // Update a class
  updateClass: async (req, res) => {
    try {
      const { name, teacherId, students, lessons } = req.body;
      const classId = req.params.id;

      const updatedClass = await ClassName.findByIdAndUpdate(
        classId,
        { name, teacher: teacherId, students, lessons },
        { new: true }
      );

      if (!updatedClass) {
        return res.status(404).json({ message: 'Class not found' });
      }

      res.json(updatedClass);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // Delete a class
  deleteClass: async (req, res) => {
    try {
      const classId = req.params.id;
      const deletedClass = await ClassName.findByIdAndDelete(classId);
      
      if (!deletedClass) {
        return res.status(404).json({ message: 'Class not found' });
      }

      res.json({ message: 'Class deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
};

module.exports = ClassController;