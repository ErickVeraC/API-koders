const mongoose = require("mongoose");

const generationSchema = new mongoose.Schema({
  number: {
    type: Number,
    required: true,
    min: 1,
  },
  program: {
    type: String,
    required: true,
    enum: ["javascript", "python", "mobile"],
  },
  mentor: {
    type: mongoose.Schema.Types.ObjectId,
    required: false,
    ref: "Mentor",
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

module.exports = mongoose.model("generations", generationSchema);
