const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const classSchema = new Schema({
  name: { type: String, required: true },
  teacher: { type: Schema.Types.ObjectId, ref: 'User', required: true }, // Reference to teacher
  students: [{ type: Schema.Types.ObjectId, ref: 'User' }], // Array of student references
  lessons: [{ type: Schema.Types.ObjectId, ref: 'Lesson' }], // Array of lesson references
});

const ClassName = mongoose.model('ClassName', classSchema);

module.exports = ClassName;