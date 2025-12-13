import { fileURLToPath } from "url";
import MovieModel from "../models/movieModel.js";
import fs from "fs";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const showMovie = async (req, res) => {
    try {
        const movies = await MovieModel.find({});

        const genreCount = {
            devotional: 0,
            action: 0,
            comedy: 0,
            drama: 0,
            horror: 0,
            sci: 0,
            other: 0
        };

        movies.forEach(movie => {
            if (genreCount[movie.genre] !== undefined) {
                genreCount[movie.genre]++;
            }
        });

        res.render("index", { genreCount });
    } catch (error) {
        console.log(error);
    }
};

export const addMovie = async (req, res) => {
    try {
        if (req.file.mimetype.includes("image")) {
            const movieBody = req.body;
            const image = req.file.path;

            const movie = { ...movieBody, photo: image };

            const newMovie = new MovieModel(movie);
            await newMovie.save();
            return res.redirect("/admin/viewMovie");
        } else {
            res.send("Only Image Required");
        }
    } catch (error) {
        console.log(error);
    }
};

export const showForm = (req, res) => {
    return res.render("addMovie");
};

export const viewMovie = async (req, res) => {
    try {
        const movie = await MovieModel.find({});
        return res.render("viewMovie", { movie });
    } catch (error) {
        console.log(error);
    }
};

export const deleteMovie = async (req, res) => {
    try {
        const id = req.params.id;
        const movie = await MovieModel.findById(id);

        const imagePath = path.join(__dirname, "..", movie.photo);
        fs.unlink(imagePath, () => { });

        await MovieModel.findByIdAndDelete(id);
        return res.redirect("/admin/viewMovie");
    } catch (error) {
        console.log(error);
    }
};

export const getUpdateMovie = async (req, res) => {
    try {
        const id = req.params.id;
        const movie = await MovieModel.findById(id);
        res.render("editMovie", { movie });
    } catch (error) {
        console.log(error);
    }
};

export const updateMovie = async (req, res) => {
    const movieBody = req.body;
    const { id } = req.params;

    const movie = await MovieModel.findById(id);

    if (req.file) {
        const oldImagePath = path.join(__dirname, "..", movie.photo);
        fs.unlink(oldImagePath, () => { });
        movieBody.photo = req.file.path;
    }

    await MovieModel.findByIdAndUpdate(id, movieBody);
    res.redirect("/admin/viewMovie");
};

export const descriptionAdmin = async (req, res) => {
    try {
        const { id } = req.params;

        const movie = await MovieModel.findById(id);

        if (!movie) {
            return res.render("description", { movie: null });
        }

        res.render("description", { movie });
    } catch (error) {
        console.log(error);
    }
};
