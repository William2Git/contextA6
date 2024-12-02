import "./Genres.css";
import axios from "axios";
import { useState, useEffect } from "react";
import {useNavigate} from "react-router";

function Genres(props) {
  const navigate = useNavigate();

  const [genre, setGenre] = useState([]);
  console.log(props.genresList)

  useEffect(() => {
    (async function getGenre() {
      const response = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_TMDB_KEY}`
      );

      setGenre(response.data);
      console.log(response);
    })()
  }, []);

  return (
    <ul>
      {
        props.genresList.map((gen)=>{
          return(
            <li key={gen.id} onClick={() => navigate("/")}>{gen.genre}</li>
          )
        })
      }
    </ul>
  );

}

export default Genres;