const Complaint = require('../models/Complaint');
const cloudinary = require('../config/cloudinary');
const { sendEmail } = require('../utils/sendEmail');

// @desc    Get all complaints (public for resolved, private for user's own)
// @route   GET /api/complaints
// @access  Public/Private
const getComplaints = async (req, res) => {
  try {
    let query = {};

    if (req.user) {
      // If authenticated, show user's complaints or all if admin
      if (req.user.role !== 'admin') {
        query.user = req.user._id;
      }
    } else {
      // Public: only resolved complaints
      query.status = 'Resolved';
    }

    const complaints = await Complaint.find(query)
      .populate('user', 'name email')
      .populate('assignedTo', 'name')
      .sort({ createdAt: -1 });

    res.json(complaints);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get single complaint
// @route   GET /api/complaints/:id
// @access  Private
const getComplaint = async (req, res) => {
  try {
    const complaint = await Complaint.findById(req.params.id)
      .populate('user', 'name email')
      .populate('assignedTo', 'name')
      .populate('comments.user', 'name');

    if (!complaint) {
      return res.status(404).json({ message: 'Complaint not found' });
    }

    // Check if user owns the complaint or is admin
    if (complaint.user._id.toString() !== req.user._id.toString() && req.user.role !== 'admin') {
      return res.status(401).json({ message: 'Not authorized' });
    }

    res.json(complaint);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Create new complaint
// @route   POST /api/complaints
// @access  Private
const createComplaint = async (req, res) => {
  const { title, description, category, location } = req.body;

  try {
    let images = [];

    // Upload images to Cloudinary
    if (req.files && req.files.length > 0) {
      for (const file of req.files) {
        const result = await cloudinary.uploader.upload(`data:${file.mimetype};base64,${file.buffer.toString('base64')}`, {
          folder: 'complaints',
        });
        images.push(result.secure_url);
      }
    }

    const complaint = await Complaint.create({
      title,
      description,
      category,
      location: JSON.parse(location || '{}'),
      images,
      user: req.user._id,
    });

    res.status(201).json(complaint);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Update complaint
// @route   PUT /api/complaints/:id
// @access  Private/Admin
const updateComplaint = async (req, res) => {
  try {
    const complaint = await Complaint.findById(req.params.id);

    if (!complaint) {
      return res.status(404).json({ message: 'Complaint not found' });
    }

    // Check permissions
    if (complaint.user.toString() !== req.user._id.toString() && req.user.role !== 'admin') {
      return res.status(401).json({ message: 'Not authorized' });
    }

    const updatedComplaint = await Complaint.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    ).populate('user', 'name email').populate('assignedTo', 'name');

    // Send email notification if status changed
    if (req.body.status && req.body.status !== complaint.status) {
      try {
        const populatedComplaint = await Complaint.findById(req.params.id).populate('user', 'email');
        if (populatedComplaint && populatedComplaint.user && populatedComplaint.user.email) {
          await sendEmail(
            populatedComplaint.user.email,
            'Complaint Status Update',
            `Your complaint "${complaint.title}" status has been updated to ${req.body.status}`
          );
        }
      } catch (emailError) {
        console.error('Email notification failed:', emailError);
      }
    }

    res.json(updatedComplaint);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Delete complaint
// @route   DELETE /api/complaints/:id
// @access  Private/Admin
const deleteComplaint = async (req, res) => {
  try {
    const complaint = await Complaint.findById(req.params.id);

    if (!complaint) {
      return res.status(404).json({ message: 'Complaint not found' });
    }

    if (complaint.user.toString() !== req.user._id.toString() && req.user.role !== 'admin') {
      return res.status(401).json({ message: 'Not authorized' });
    }

    await Complaint.findByIdAndDelete(req.params.id);
    res.json({ message: 'Complaint removed' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getComplaints, getComplaint, createComplaint, updateComplaint, deleteComplaint };