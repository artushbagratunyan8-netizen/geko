import { Link } from "react-router-dom";

function MovieCard({id, title, image, year}) {
    return (
        <div>
            <img src="{image}" alt={title} />
            <h3>{title}</h3>
            <p>{year}</p>
            <Link to={`/movies/${id}`}>
            <button>Details</button>
            </Link>
        </div>
    )
}

export default MovieCard;