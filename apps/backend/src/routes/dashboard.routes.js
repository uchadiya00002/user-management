const express = require('express');
const { getStats } = require('../controllers/dashboard.controller');
const authMiddleware = require('../middlewares/auth.middleware');

const router = express.Router();

router.use(authMiddleware);
router.get('/stats', getStats);

module.exports = router;