const AuditLog = require("../models/AuditLog");

exports.getLogs = async (req, res) => {
  const logs = await AuditLog.find().sort({ date: -1 });
  res.json(logs);
};

exports.addLog = async (req, res) => {
  const { action, user } = req.body;
  const log = await AuditLog.create({ action, user });
  res.status(201).json(log);
};
