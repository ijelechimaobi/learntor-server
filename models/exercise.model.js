const mongoose = require("mongoose");

const ExerciseSchema = new mongoose.Schema(
  {
    question: {
      type: String,
      required: [true, "No question specified!"],
    },

    module: {
      type: String,
    },

    correct: {
      type: String,
    },

    answers: {
      type: Array,
      required: [true, "Options required"],
    },

    disabled: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports =
  mongoose.model.Exercise || mongoose.model("Exercise", ExerciseSchema);
