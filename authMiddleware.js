const Appointment = require('../models/Appointment');

exports.createAppointment = async (req, res) => {
  try {
    // use authenticated user
    const data = {
      name: req.body.name,
      date: req.body.date,
      time: req.body.time,
      reason: req.body.reason,
      user: req.user.id,
    };
    const a = await Appointment.create(data);
    res.status(201).json(a);
  } catch (err) { res.status(500).json({ message: err.message }); }
};

exports.getMyAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find({ user: req.user.id }).sort({ date: 1 });
    res.json(appointments);
  } catch (err) { res.status(500).json({ message: err.message }); }
};

exports.getAllAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find().populate('user','name email').sort({ date: 1 });
    res.json(appointments);
  } catch (err) { res.status(500).json({ message: err.message }); }
};

exports.deleteAppointment = async (req, res) => {
  try {
    console.log("ID from frontend:", req.params.id);
    console.log("Logged in user:", req.user.id, "Role:", req.user.role);

    const appt = await Appointment.findById(req.params.id);

    if (!appt) return res.status(404).json({ message: "Not found" });

    console.log("Appointment belongs to:", appt.user.toString());

    // OWNER OR ADMIN ONLY
    if (appt.user.toString() !== req.user.id.toString() && req.user.role !== "admin") {
      return res.status(403).json({ message: "Forbidden" });
    }

    await appt.deleteOne();
    res.json({ message: "Deleted" });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
