import DetailInvoice from "../models/DetialInvoiceModel.js";

// Membuat detail Invoice baru
const createDetailInvoice = async (req, res) => {
  try {
    const detailinvoice = await DetailInvoice.create(req.body);
    res.status(201).json(detailinvoice);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Mendapatkan semua detail Invoice
const getAllDetailInvoice = async (req, res) => {
  try {
    const detailInvoice = await DetailInvoice.findAll();
    res.status(200).json(detailInvoice);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Mendapatkan detail Invoice berdasarkan ID
const getDetailInvoiceById = async (req, res) => {
  try {
    const detailInvoice = await DetailInvoice.findByPk(req.params.id);
    if (!detailInvoice) {
      res.status(404).json({ message: "Detail invoice not found" });
      return;
    }
    res.status(200).json(detailInvoice);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Mengupdate detail Invoice berdasarkan ID
const updateDetailInvoice = async (req, res) => {
  try {
    const detailInvoice = await DetailInvoice.findByPk(req.params.id);
    if (!detailInvoice) {
      res.status(404).json({ message: "Detail Invoice not found" });
      return;
    }
    await detailInvoice.update(req.body);
    res.status(200).json(detailInvoice);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Menghapus detail Invoice berdasarkan ID
const deleteDetailInvoice = async (req, res) => {
  try {
    const detailInvoice = await DetailInvoice.findByPk(req.params.id);
    if (!detailInvoice) {
      res.status(404).json({ message: "Detail Invoice not found" });
      return;
    }
    await detailInvoice.destroy();
    res.status(200).json({ message: "Detail Invoice deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export {
  createDetailInvoice,
  deleteDetailInvoice,
  getAllDetailInvoice,
  getDetailInvoiceById,
  updateDetailInvoice,
};
