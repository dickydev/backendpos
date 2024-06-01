import express from "express";
import {
    getAllInvoices,
    getInvoiceById,
    addInvoice,
    updateInvoice,
    deleteInvoice
} from "../controllers/Invoice.js";
import { verifyUser } from "../middleware/AuthUser.js";

const router = express.Router();

router.get('/invoice',verifyUser, getAllInvoices);
router.get('/invoice/:id',verifyUser, getInvoiceById);
router.post('/invoice',verifyUser, addInvoice);
router.patch('/invoice/:id',verifyUser, updateInvoice);
router.delete('/invoice/:id',verifyUser, deleteInvoice);

export default router;