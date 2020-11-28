var mongoose = require("mongoose");
var fileSchema = new mongoose.Schema({
  image: String,
  create_date: {
    type: Date,
    default: Date.now
  }
});
mongoose.model("file", fileSchema);