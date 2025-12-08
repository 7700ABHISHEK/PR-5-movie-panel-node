import mongoose from "mongoose";

const MONGO_URI = "mongodb://localhost:27017/movieDB";

const connectDB = async () => {

    mongoose.connection.on('connected', () => {
        console.log("Database connected successfully...");
    })
    await mongoose.connect(MONGO_URI);
}

export default connectDB;