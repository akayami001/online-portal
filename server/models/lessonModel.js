const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const lessonSchema = new Schema({
  name: { type: String, required: true },
  className: { type: Schema.Types.ObjectId, ref: 'ClassName', required: true }, // Reference to class
  date: { type: Date, required: true },
  description: { type: String },
});

const Lesson = mongoose.model('Lesson', lessonSchema);

module.exports = Lesson;
