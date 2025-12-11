import express from "express";
import movieRouter from "./routes/movieRoutes.js";
import frontendRouter from "./routes/frontendRoutes.js";
import connectDB from "./config/db.js";

const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/uploads",express.static("uploads"))

connectDB();

app.use("/admin", movieRouter);
app.use("/", frontendRouter);

app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
        return
    }
    console.log(`server is running :- http://localhost:${PORT}`);
})