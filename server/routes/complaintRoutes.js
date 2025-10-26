const express = require('express');
const {
  getComplaints,
  getComplaint,
  createComplaint,
  updateComplaint,
  deleteComplaint,
} = require('../controllers/complaintController');
const { protect, optionalAuth } = require('../middlewares/authMiddleware');
const upload = require('../middlewares/uploadMiddleware');
const { validateComplaint } = require('../middlewares/validateInput');

const router = express.Router();

router.route('/')
  .get(optionalAuth, getComplaints)
  .post(protect, upload.array('images', 5), validateComplaint, createComplaint);

router.route('/:id')
  .get(protect, getComplaint)
  .put(protect, updateComplaint)
  .delete(protect, deleteComplaint);

module.exports = router;