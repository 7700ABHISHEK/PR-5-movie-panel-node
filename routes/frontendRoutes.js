import express from "express";
import { description, frontMovie } from "../controllers/frontendController.js";
const router = express.Router();

router.get("/", frontMovie);
router.get("/description/:id", description);

export default router;