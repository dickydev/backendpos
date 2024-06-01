import express from "express";
import {
  createDetailOrder,
  getAllDetailOrders,
  getDetailOrderById,
  updateDetailOrder,
  deleteDetailOrder,
} from '../controllers/DetailOrder.js';

const router = express.Router();

// Rute untuk membuat detail order baru
router.post("/detail-orders", createDetailOrder);

// Rute untuk mendapatkan semua detail order
router.get("/detail-orders", getAllDetailOrders);

// Rute untuk mendapatkan detail order berdasarkan ID
router.get("/detail-orders/:id", getDetailOrderById);

// Rute untuk mengupdate detail order berdasarkan ID
router.put("/detail-orders/:id", updateDetailOrder);

// Rute untuk menghapus detail order berdasarkan ID
router.delete("/detail-orders/:id", deleteDetailOrder);

export default router;
