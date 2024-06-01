import express from "express";
import {
    getAllOrders,
    getOrderById,
    addOrder,
    updateOrder,
    deleteOrder
} from "../controllers/Orders.js";
import { verifyUser } from "../middleware/AuthUser.js";

const router = express.Router();

router.get('/order',verifyUser, getAllOrders);
router.get('/order/:id',verifyUser, getOrderById);
router.post('/order',verifyUser, addOrder);
router.patch('/order/:id',verifyUser, updateOrder);
router.delete('/order/:id',verifyUser, deleteOrder);

export default router;