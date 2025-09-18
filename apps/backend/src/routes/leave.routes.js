const express = require('express');
const { createLeave, getLeaves, updateLeaveStatus } = require('../controllers/leave.controller');
const authMiddleware = require('../middlewares/auth.middleware');

const router = express.Router();

router.use(authMiddleware);
router.post('/', createLeave);
router.get('/', getLeaves);
router.patch('/:id/status', updateLeaveStatus);

module.exports = router;