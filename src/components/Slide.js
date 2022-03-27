import { useEffect, useState } from "react";
import Movie from "./Movie";

function Slide({ytsApi}){

    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);

    const getMovies = async() => {
        const json = await (await fetch(ytsApi)).json();
        setMovies(json.data.movies);
        console.log(json.data.movies);
        setLoading(false);
    };

    useEffect(() => {
        getMovies();
    },[]);
    
    return(
        <div>
            {loading ? "Loading..." : 
                <div>
                    <div>
                        {movies.map((movie) => (
                          <Movie
                            key={movie.id}
                            id={movie.id}
                            year={movie.year}
                            coverImg={movie.medium_cover_image}
                            title={movie.title}
                            summary={""}
                            genres={movie.genres}
                            movie_style={{
                              minWidth: "350px",
                              height: "300px",
                            }}
                          />
                        ))}
                    </div>
                </div>
            }       
        </div>
    )
}

export default Slide;