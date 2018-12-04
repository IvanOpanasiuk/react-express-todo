const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  text: {
    type: String,
    default: "",
    required: true,
  },
  createdAt: {
    type: Date,
    default: new Date()
  },
  done: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model("Todos", schema);
