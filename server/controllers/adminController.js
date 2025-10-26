const Complaint = require('../models/Complaint');
const User = require('../models/User');

// @desc    Get all complaints for admin
// @route   GET /api/admin/complaints
// @access  Admin
const getAllComplaints = async (req, res) => {
  try {
    const complaints = await Complaint.find({})
      .populate('user', 'name email')
      .populate('assignedTo', 'name')
      .sort({ createdAt: -1 });

    res.json(complaints);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Update complaint status
// @route   PUT /api/admin/complaints/:id/status
// @access  Admin
const updateComplaintStatus = async (req, res) => {
  const { status, assignedTo, priority } = req.body;

  try {
    const complaint = await Complaint.findById(req.params.id);

    if (!complaint) {
      return res.status(404).json({ message: 'Complaint not found' });
    }

    complaint.status = status || complaint.status;
    complaint.assignedTo = assignedTo || complaint.assignedTo;
    complaint.priority = priority || complaint.priority;

    await complaint.save();

    const updatedComplaint = await Complaint.findById(req.params.id)
      .populate('user', 'name email')
      .populate('assignedTo', 'name');

    res.json(updatedComplaint);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get dashboard stats
// @route   GET /api/admin/stats
// @access  Admin
const getStats = async (req, res) => {
  try {
    const totalComplaints = await Complaint.countDocuments();
    const pendingComplaints = await Complaint.countDocuments({ status: 'Pending' });
    const inProgressComplaints = await Complaint.countDocuments({ status: 'In Progress' });
    const resolvedComplaints = await Complaint.countDocuments({ status: 'Resolved' });
    const totalUsers = await User.countDocuments({ role: 'user' });

    res.json({
      totalComplaints,
      pendingComplaints,
      inProgressComplaints,
      resolvedComplaints,
      totalUsers,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getAllComplaints, updateComplaintStatus, getStats };