import mongoose from "mongoose";

const requestSchema = new mongoose.Schema({
  fullName: String,
  dateOfBirth: String,
  address: String,
  contactNumber: String,
  email: String,
  documentTypes: [String],
  filePaths: [String],
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Request", requestSchema);
