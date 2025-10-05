const Resident = require("../models/Resident");

exports.getResidents = async (req, res) => {
  const residents = await Resident.find();
  res.json(residents);
};

exports.getResident = async (req, res) => {
  const resident = await Resident.findById(req.params.id);
  if (!resident) return res.status(404).json({ message: "Resident not found" });
  res.json(resident);
};

exports.addResident = async (req, res) => {
  const resident = await Resident.create(req.body);
  res.status(201).json(resident);
};

exports.updateResident = async (req, res) => {
  const resident = await Resident.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!resident) return res.status(404).json({ message: "Resident not found" });
  res.json(resident);
};

exports.deleteResident = async (req, res) => {
  const resident = await Resident.findByIdAndDelete(req.params.id);
  if (!resident) return res.status(404).json({ message: "Resident not found" });
  res.json({ message: "Resident deleted" });
};
