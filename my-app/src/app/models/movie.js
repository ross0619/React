import mongoose, {Schema} from "mongoose";

const movieSchema = new Schema({
    MovieTitle: {
        type: String,
    },
    Director: {
        type: String
    },
    Category: {
        type: String
    },
    ReleaseDate: {
        type: String
    },
    Rank: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now,
    }
});

const Movie = mongoose.models.Movie || mongoose.model("Movie", movieSchema);

export default Movie;