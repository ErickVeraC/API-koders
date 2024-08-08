const mongoose = require("mongoose");

const mentorSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 100,
  },
  lastName: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 100,
  },
  email: {
    type: String,
    required: true,
    match: RegExp(".*@.*..*"),
  },
});

module.exports = mongoose.model("Mentor", mentorSchema);
