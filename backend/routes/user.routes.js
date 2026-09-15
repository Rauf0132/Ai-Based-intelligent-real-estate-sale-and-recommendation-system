const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

// GET /api/users/profile
router.get('/profile', userController.getProfile);

// PUT /api/users/profile
router.put('/profile', userController.updateProfile);

module.exports = router;
