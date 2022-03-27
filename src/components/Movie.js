import PropTypes from "prop-types";
import { Link } from "react-router-dom";
function Movie({ id, coverImg, title, summary, genres, movie_style }){
    if(coverImg == ""){
        return null;
    }
    return (
    <div>
        <img src={coverImg} alt={title}/>
            <h2>
                <Link to={`/movie/${id}`}>{title.length > 50 ? `${title.slice(0, 50)}...` : title}</Link>
            </h2>
            <p>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
            <ul>
                {genres.map((g) => (
                <li key={g}>{g}</li>
                ))}
            </ul>
    </div>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}  

export default Movie;