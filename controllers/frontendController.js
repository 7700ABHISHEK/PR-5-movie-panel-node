import MovieModel from "../models/movieModel.js";

export const frontMovie = async (req, res) => {

    const movie = await MovieModel.find({});

    return res.render("frontend", { movie })
}

export const description = async (req, res) => {
    try {
        const movieId = req.params.id;
        const movie = await MovieModel.findById(movieId);  // single movie object
        if (!movie) return res.status(404).send('Movie not found');
        res.render('descriptionFront', { movie });  // pass single movie
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
};
