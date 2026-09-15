// @desc    Get user profile
// @route   GET /api/users/profile
exports.getProfile = async (req, res) => {
  try {
    res.status(200).json({ message: 'Get profile — coming soon' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Update user profile
// @route   PUT /api/users/profile
exports.updateProfile = async (req, res) => {
  try {
    res.status(200).json({ message: 'Update profile — coming soon' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
