import express from 'express';
import { showMovie } from '../controllers/movieControllers.js';
const router = express.Router();

router.get("/", showMovie);

export default router;