const Request = require("../models/Request");

exports.getRequests = async (req, res) => {
  const requests = await Request.find();
  res.json(requests);
};

exports.createRequest = async (req, res) => {
  const request = await Request.create(req.body);
  res.status(201).json(request);
};

exports.updateRequestStatus = async (req, res) => {
  const request = await Request.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!request) return res.status(404).json({ message: "Request not found" });
  res.json(request);
};
