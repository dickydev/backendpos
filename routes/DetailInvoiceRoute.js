import express from "express";
import {
  createDetailInvoice,
  deleteDetailInvoice,
  getAllDetailInvoice,
  getDetailInvoiceById,
  updateDetailInvoice,
} from "../controllers/DetailInvoice.js";

const router = express.Router();

// Rute untuk membuat detail order baru
router.post("/detail-invoice", createDetailInvoice);

// Rute untuk mendapatkan semua detail order
router.get("/detail-invoice", getAllDetailInvoice);

// Rute untuk mendapatkan detail order berdasarkan ID
router.get("/detail-invoice/:id", getDetailInvoiceById);

// Rute untuk mengupdate detail order berdasarkan ID
router.put("/detail-invoice/:id", updateDetailInvoice);

// Rute untuk menghapus detail order berdasarkan ID
router.delete("/detail-invoice/:id", deleteDetailInvoice);

export default router;
