import express from "express";
const router = express.Router();
import logOutContrller from "../controllers/logOutController.js";

router.get("/", logOutContrller);

export default router;
