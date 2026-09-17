exports.getAllProperties = async (req, res) => {
  try {
    res.status(200).json({ message: "Get all properties — coming soon" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
exports.getPropertyById = async (req, res) => {
  try {
    res
      .status(200)
      .json({ message: `Get property ${req.params.id} — coming soon` });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
exports.createProperty = async (req, res) => {
  try {
    res.status(201).json({ message: "Create property — coming soon" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
exports.updateProperty = async (req, res) => {
  try {
    res
      .status(200)
      .json({ message: `Update property ${req.params.id} — coming soon` });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
exports.deleteProperty = async (req, res) => {
  try {
    res
      .status(200)
      .json({ message: `Delete property ${req.params.id} — coming soon` });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
