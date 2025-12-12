import MovieModel from "../models/movieModel.js";

export const frontMovie = (req, res) => {
    return res.render("frontend")
}

export const description = (req, res) => {
    const movieId = req.params.id;
    const film = MovieModel.findById(movieId);

    if (!film) {
        return res.status(404).send("Movie not found");
    }

    res.render("description", { film });
};