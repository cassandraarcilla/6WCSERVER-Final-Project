const mongoose = require("mongoose");

const documentSchema = new mongoose.Schema({
  requestId: { type: mongoose.Schema.Types.ObjectId, ref: "Request" },
  documentName: String,
  issuedTo: String,
  issuedBy: String,
  issuedDate: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Document", documentSchema);
