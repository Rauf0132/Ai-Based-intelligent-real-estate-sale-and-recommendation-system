// @desc    Get all properties
// @route   GET /api/properties
exports.getAllProperties = async (req, res) => {
  try {
    res.status(200).json({ message: 'Get all properties — coming soon' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get single property
// @route   GET /api/properties/:id
exports.getPropertyById = async (req, res) => {
  try {
    res.status(200).json({ message: `Get property ${req.params.id} — coming soon` });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Create property
// @route   POST /api/properties
exports.createProperty = async (req, res) => {
  try {
    res.status(201).json({ message: 'Create property — coming soon' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Update property
// @route   PUT /api/properties/:id
exports.updateProperty = async (req, res) => {
  try {
    res.status(200).json({ message: `Update property ${req.params.id} — coming soon` });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Delete property
// @route   DELETE /api/properties/:id
exports.deleteProperty = async (req, res) => {
  try {
    res.status(200).json({ message: `Delete property ${req.params.id} — coming soon` });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
