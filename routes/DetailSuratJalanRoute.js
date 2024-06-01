import express from "express";
import {
  addDetailSuratJalan,
  getDetailSuratJalanByIdSuratJalan,
  updateDetailSuratJalan,
  deleteDetailSuratJalan,
  getAllDetailSuratJalan,
  getDetailSuratJalanById,
} from "../controllers/DetailSuratJalan.js";
import { verifyUser } from "../middleware/AuthUser.js";

const router = express.Router();

// Rute untuk menambahkan detail surat jalan baru
router.post("/detailsuratjalan", addDetailSuratJalan);

// Rute untuk mendapatkan semua detail surat jalan berdasarkan ID surat jalan
router.get(
  "/detailsuratjalan/:idSuratJalan",
  verifyUser,
  getDetailSuratJalanByIdSuratJalan
);
router.get("/detailsuratjalan", getAllDetailSuratJalan);
router.get("/detailsuratjalan/:id");

// Rute untuk mengupdate detail surat jalan berdasarkan ID
router.patch("/detailsuratjalan/:id", verifyUser, updateDetailSuratJalan);

// Rute untuk menghapus detail surat jalan berdasarkan ID
router.delete("/detailsuratjalan/:id", verifyUser, deleteDetailSuratJalan);

export default router;
