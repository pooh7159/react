import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [detail, setDetail] = useState({});

    const getMovieDetail = async () => {
      const json = await ( await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`) ).json();
      setDetail(json);
      setLoading(false);
    }
    useEffect( () => {
      getMovieDetail();
    } , []);
  

    return (
        <div>
          {loading ? <strong>Loading ..</strong> : 
            <div>
               <h1>{detail.data.movie.title}</h1>
               <h1>{detail.data.movie.download_count}</h1>
               <h1>{detail.data.movie.description_intro}</h1>
               <h1>{detail.data.movie.description_full}</h1>
               <img src={detail.data.movie.background_image} alt="bgim" ></img>
            </div>
          }
        </div>
    );
  }
  export default Detail;