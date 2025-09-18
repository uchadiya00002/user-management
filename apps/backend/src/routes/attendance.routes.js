const express = require('express');
const { checkIn, checkOut, getAttendance } = require('../controllers/attendance.controller');
const authMiddleware = require('../middlewares/auth.middleware');

const router = express.Router();

router.use(authMiddleware);
router.post('/check-in', checkIn);
router.post('/check-out', checkOut);
router.get('/', getAttendance);

module.exports = router;