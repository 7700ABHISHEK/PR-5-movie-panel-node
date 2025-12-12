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
            return res.redirect("/admin/viewMovie")
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

export const deleteMovie = async (req, res) => {

    const id = req.params.id;

    try {
        const movie = await MovieModel.findByIdAndDelete(id)
        return res.redirect("/admin/viewMovie")
    } catch (error) {
        console.log(error);
    }
}

export const descriptionAdmin = (req, res) => {
    
}   

// ****
// *  *
// *  *
// ****