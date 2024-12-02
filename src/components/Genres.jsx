import "./Genres.css";
import axios from "axios";
import { useState, useEffect } from "react";

function Genres({gen}){
    const [genre, setGenre] = useState([]);

  useEffect(() => {
    (async function getGenre() {
      const response = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_TMDB_KEY}`
      );

      setGenre(response.data);
      console.log(response);
    })()
  }, []);

    return(
        <h1>bonjour</h1>
    );

}

export default Genres;