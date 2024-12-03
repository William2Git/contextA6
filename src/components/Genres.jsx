import "./Genres.css";
import { useState } from "react";
import { useNavigate } from "react-router";

function Genres(props) {
  const navigate = useNavigate();
  const [id, setId] = useState(null);

  function DisplayMovies(genre) {
    setId(genre.id);
    navigate(`genre/${genre.id}`);
  }

  return (
    <div>
      <h1 id="list-title">Genres</h1>
      <ul>
        {
          props.genresList.map((gen) => {
            return (
              <li id="categories" key={gen.id} onClick={() => DisplayMovies(gen)} style={{ cursor: 'pointer' }}>{gen.genre}</li>
            )
          })
        }
      </ul>
    </div>
  );

}

export default Genres;