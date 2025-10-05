const Document = require("../models/Document");

exports.getDocuments = async (req, res) => {
  const docs = await Document.find();
  res.json(docs);
};

exports.addDocument = async (req, res) => {
  const doc = await Document.create(req.body);
  res.status(201).json(doc);
};
