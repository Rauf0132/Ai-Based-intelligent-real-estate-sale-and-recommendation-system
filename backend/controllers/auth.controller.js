// @desc    Register a new user
// @route   POST /api/auth/register
exports.register = async (req, res) => {
  try {
    res.status(201).json({ message: 'Register endpoint — coming soon' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Login user
// @route   POST /api/auth/login
exports.login = async (req, res) => {
  try {
    res.status(200).json({ message: 'Login endpoint — coming soon' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
