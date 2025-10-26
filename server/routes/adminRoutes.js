const express = require('express');
const { getAllComplaints, updateComplaintStatus, getStats } = require('../controllers/adminController');
const { protect, admin } = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/complaints', protect, admin, getAllComplaints);
router.put('/complaints/:id/status', protect, admin, updateComplaintStatus);
router.get('/stats', protect, admin, getStats);

module.exports = router;