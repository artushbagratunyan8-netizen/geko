import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import movies from "../data/movies";
import { addFavorite, removeFavorite } from "../features/favorites/favoritesSlice";

function MovieDetails() {
    const {id} = useParams();
    const movie = movies.find(
        movie => movie.id === Number(id)
    );
    const favorites = useSelector(
        state => state.favorites
    );
    const dispatch = useDispatch();
    const isFavorite = favorites.some(
        fav => fav.id === movie.id
    );

    return (
        <div>
            <img src="{movie.image}" alt={movie.title} />

            <h1>{movie.title}</h1>
            <p>{movie.description}</p>
            <p>Year: {movie.year}</p>
            <p>Rating: {movie.rating}</p>


      {isFavorite ? (
        <button
          onClick={() =>
            dispatch(removeFavorite(movie.id))
          }
        >
          Remove Favorite
        </button>
      ) : (
        <button
          onClick={() =>
            dispatch(addFavorite(movie))
          }
        >
          Add Favorite
        </button>
      )}
    </div>
  );
}

export default MovieDetails
    