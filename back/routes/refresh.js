import express from "express";
const router = express.Router();
import refreshController from "../controllers/refreshTokenController.js";

router.get("/", refreshController);

export default router;
