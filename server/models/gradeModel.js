const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gradeSchema = new Schema({
  student: { type: Schema.Types.ObjectId, ref: 'User', required: true }, // Reference to student
  lesson: { type: Schema.Types.ObjectId, ref: 'Lesson', required: true }, // Reference to lesson
  grade: { type: Number, required: true, min: 0, max: 100 },
});

const Grade = mongoose.model('Grade', gradeSchema);

module.exports = Grade;