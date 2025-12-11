import MovieModel from "../models/movieModel.js";

export const showMovie = (req, res) => {
    return res.render("index")
}

export const addMovie = async (req, res) => {
    try {
        if (req.file.mimetype.includes("image")) {
            const movieBody = req.body;
            const image = req.file.path;

            const movie = {
                ...movieBody, photo: image
            }

            const newMovie = new MovieModel(movie);
            await newMovie.save();
            return res.redirect("/admin")
        } else {
            res.send("Only Image Required");
        }
    } catch (error) {
        console.log(error);
    }
}

export const showForm = (req, res) => {
    return res.render("addMovie")
}

export const viewMovie = async (req, res) => {
    try {
        const movie = await MovieModel.find({})
        return res.render("viewMovie", { movie })
    } catch (error) {
        console.log(error);
    }
}