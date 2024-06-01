import DetailOrder from "../models/DetailOrderModel.js";

// Membuat detail order baru
const createDetailOrder = async (req, res) => {
  try {
    const detailOrder = await DetailOrder.create(req.body);
    res.status(201).json(detailOrder);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Mendapatkan semua detail order
const getAllDetailOrders = async (req, res) => {
  try {
    const detailOrders = await DetailOrder.findAll();
    res.status(200).json(detailOrders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Mendapatkan detail order berdasarkan ID
const getDetailOrderById = async (req, res) => {
  try {
    const detailOrder = await DetailOrder.findByPk(req.params.id);
    if (!detailOrder) {
      res.status(404).json({ message: "Detail order not found" });
      return;
    }
    res.status(200).json(detailOrder);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Mengupdate detail order berdasarkan ID
const updateDetailOrder = async (req, res) => {
  try {
    const detailOrder = await DetailOrder.findByPk(req.params.id);
    if (!detailOrder) {
      res.status(404).json({ message: "Detail order not found" });
      return;
    }
    await detailOrder.update(req.body);
    res.status(200).json(detailOrder);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Menghapus detail order berdasarkan ID
const deleteDetailOrder = async (req, res) => {
  try {
    const detailOrder = await DetailOrder.findByPk(req.params.id);
    if (!detailOrder) {
      res.status(404).json({ message: "Detail order not found" });
      return;
    }
    await detailOrder.destroy();
    res.status(200).json({ message: "Detail order deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export {
  createDetailOrder,
  getAllDetailOrders,
  getDetailOrderById,
  updateDetailOrder,
  deleteDetailOrder,
};
