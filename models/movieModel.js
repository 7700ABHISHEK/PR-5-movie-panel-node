import mongoose from "mongoose";

const movieSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    rating: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
})

const MovieModel = mongoose.model("MovieModel", movieSchema);
export default MovieModel;