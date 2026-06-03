import { useSelector } from "react-redux";

function Favorites() {
    const favorites = useSelector(
        state => state.favorites
    );
    if (favorites.length === 0) {
        return <h2>No favorites movies</h2>;
    }
    return (
        <div>
            <h1>Favorites</h1>

            {favorites.map(movie => (
                <div key={movie.id}>
                    <h1>{movie.title}</h1>
                </div>
           ))}
        </div>
    )
}
export default Favorites;