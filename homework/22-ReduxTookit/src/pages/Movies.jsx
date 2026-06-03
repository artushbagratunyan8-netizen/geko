import movies from "../data/movies";
import MovieCard from "../components/MovieCard";

function Movies() {
    return(
        <div>
            <h1>Movies</h1>

            {movies.map(movie => (
                <MovieCard
                key={movie.id}
                id={movie.id}
                title={movie.title}
                image={movie.image}
                year={movie.year}
                />
            )

            )}
        </div>
    )
}

export default Movies;