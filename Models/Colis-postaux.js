const mongoose = require("mongoose");

const CPXSchema = new mongoose.Schema({
  
  QrCode: {
    type: String,
    required: true,
  },

  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "AGENT",
    required: false,
  },

  Date: {
    type: Array,
    required: false,
  },

  TaxeMagasinage: {
    type: Number,
    required: false,
  },

  Status: {
    type: String,
    default: "En instance"
  },

});

module.exports.CPX = mongoose.model("CPX", CPXSchema);
