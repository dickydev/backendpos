import express from "express";
import {
  getAllSuratJalan,
  getSuratJalanById,
  addSuratJalan,
  updateSuratJalan,
  deleteSuratJalan,
  getDetailInvoiceByNoSuratJalan,
} from "../controllers/SuratJalan.js";
import { verifyUser } from "../middleware/AuthUser.js";

const router = express.Router();

router.get("/suratjalan", getAllSuratJalan);
router.get("/suratjalan/:id", verifyUser, getSuratJalanById);
router.post("/suratjalan", addSuratJalan);
router.patch("/suratjalan/:id", verifyUser, updateSuratJalan);
router.delete("/suratjalan/:id", verifyUser, deleteSuratJalan);
router.get(
  "/suratjalan/detail/:noSuratJalan",
  verifyUser,
  getDetailInvoiceByNoSuratJalan
);

export default router;
