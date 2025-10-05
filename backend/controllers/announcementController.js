const Announcement = require("../models/Announcement");

exports.getAnnouncements = async (req, res) => {
  const announcements = await Announcement.find().sort({ createdAt: -1 });
  res.json(announcements);
};

exports.addAnnouncement = async (req, res) => {
  const { title, content } = req.body;
  const announcement = await Announcement.create({
    title,
    content,
    postedBy: req.user.id,
  });
  res.status(201).json(announcement);
};

exports.deleteAnnouncement = async (req, res) => {
  const announcement = await Announcement.findByIdAndDelete(req.params.id);
  if (!announcement) return res.status(404).json({ message: "Announcement not found" });
  res.json({ message: "Announcement deleted" });
};
