import express from 'express';
import { addMovie, deleteMovie, showForm, showMovie, viewMovie } from '../controllers/movieControllers.js';
import upload from '../middleware/multer.js';
const router = express.Router();

router.get("/", showMovie);
router.get("/addMovie", showForm)
router.post("/addMovie", upload.single('photo') , addMovie);
router.get("/viewMovie", viewMovie);
router.get("/deleteMovie/:id", deleteMovie);
router.get("/descriptionAdmin",)

export default router;