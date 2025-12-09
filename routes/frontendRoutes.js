import express from "express";
import { frontMovie } from "../controllers/frontendController.js";
const router = express.Router();

router.get("/", frontMovie);

export default router;