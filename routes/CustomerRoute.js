import express from "express";
import {
    getAllCustomers,
    getCustomerById,
    addCustomer,
    updateCustomer,
    deleteCustomer
} from "../controllers/Customers.js";
import { verifyUser } from "../middleware/AuthUser.js";

const router = express.Router();

router.get('/customers',verifyUser, getAllCustomers);
router.get('/customers/:kodeCust',verifyUser, getCustomerById);
router.post('/customers',verifyUser, addCustomer);
router.patch('/customers/:id',verifyUser, updateCustomer);
router.delete('/customers/:id',verifyUser, deleteCustomer);

export default router;