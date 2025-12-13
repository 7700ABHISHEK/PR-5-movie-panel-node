import express from 'express';
import { addMovie, deleteMovie, descriptionAdmin, getUpdateMovie, showForm, showMovie, updateMovie, viewMovie } from '../controllers/movieControllers.js';
import upload from '../middleware/multer.js';
const router = express.Router();

router.get("/", showMovie);
router.get("/addMovie", showForm)
router.post("/addMovie", upload.single('photo') , addMovie);
router.get("/viewMovie", viewMovie);
router.get("/deleteMovie/:id", deleteMovie);
router.get("/description/:id", descriptionAdmin);
router.get("/updateMovie/:id", getUpdateMovie);
router.post("/updateMovie/:id", upload.single('photo') ,updateMovie);


export default router;