import Invoice from "../models/InvoiceModel.js";

// Controller untuk menampilkan semua invoice
export const getAllInvoices = async (req, res) => {
  try {
    const invoices = await Invoice.findAll();
    res.json(invoices);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller untuk menambahkan invoice baru
export const addInvoice = async (req, res) => {
  const invoiceData = req.body;
  try {
    const newInvoice = await Invoice.create(invoiceData);
    res.status(201).json(newInvoice);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Controller untuk mendapatkan detail invoice berdasarkan ID
export const getInvoiceById = async (req, res) => {
  const invoiceId = req.params.id;
  try {
    const invoice = await Invoice.findByPk(invoiceId);
    if (!invoice) {
      res.status(404).json({ message: "Invoice not found" });
      return;
    }
    res.json(invoice);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller untuk mengupdate invoice berdasarkan ID
export const updateInvoice = async (req, res) => {
  const invoiceId = req.params.id;
  const updatedData = req.body;
  try {
    const invoice = await Invoice.findByPk(invoiceId);
    if (!invoice) {
      res.status(404).json({ message: "Invoice not found" });
      return;
    }
    await invoice.update(updatedData);
    res.json({ message: "Invoice updated successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller untuk menghapus invoice berdasarkan ID
export const deleteInvoice = async (req, res) => {
  const invoiceId = req.params.id;
  try {
    const invoice = await Invoice.findByPk(invoiceId);
    if (!invoice) {
      res.status(404).json({ message: "Invoice not found" });
      return;
    }
    await invoice.destroy();
    res.json({ message: "Invoice deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
