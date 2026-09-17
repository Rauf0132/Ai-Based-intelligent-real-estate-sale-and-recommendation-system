
exports.getProfile = async (req, res) => {
  try {
    res.status(200).json({ message: 'Get profile — coming soon' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
exports.updateProfile = async (req, res) => {
  try {
    res.status(200).json({ message: 'Update profile — coming soon' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
