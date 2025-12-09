import express from 'express';
import { addMovie, showMovie, viewMovie } from '../controllers/movieControllers.js';
const router = express.Router();

router.get("/", showMovie);
router.get("/addMovie", addMovie);
router.get("/viewMovie", viewMovie);

export default router;