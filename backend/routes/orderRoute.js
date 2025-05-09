import express from "express";
import { orderData } from "../controllers/orderController.js";
import userMiddleware from "../middlewares/userMiddleware.js";

const router = express.Router();

router.post("/", userMiddleware, orderData);

export default router;