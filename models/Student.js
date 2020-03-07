const mongoose = require("mongoose");

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  studentId: {
    type: String,
    required: true,
    unique: true
  },
  notes: {
    type: String
  },
  focus: {
    type: Array,
  }
});

// This creates our model from the above schema, using mongoose's model method
const Student = mongoose.model("Student", StudentSchema, "Student");

// Export the Student model
module.exports = Student;