import "./GenreView.css";
import axios from "axios";
import { useParams, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { useStoreContext } from "../context";

function GenreView() {
  let [page, setPage] = useState(1);
  let [posters, setPosters] = useState([]);
  let [maxPage, setMaxPage] = useState(0);
  const [buyText, setBuyText] = useState("Buy");
  const { cart, setCart } = useStoreContext();
  const [movDetails, setMovDetails] = useState([]);

  const params = useParams();
  const navigate = useNavigate();

  //this use effect provides new pages of posters for the SAME genre
  useEffect(() => {
    (async function getGenre() {
      const response = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_TMDB_KEY}&with_genres=${params.id}&page=${page}`
      );
      setPosters(response.data.results);
      setMaxPage(response.data.total_pages);
      console.log(response.data);
    })()
  }, [page]);

  //this use effect RESETS the page count to 1 and provides posters for a NEW genre
  useEffect(() => {
    setPage(1);
    (async function getGenre() {
      const response = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_TMDB_KEY}&with_genres=${params.id}&page=${page}`
      );
      setPosters(response.data.results);
      setMaxPage(response.data.total_pages);
      console.log(response.data.results);
    })()
  }, [params.id]);

  //this use effect gets details for the movies so that they can be added to the cart
  useEffect(() => {
    (async function getGenre() {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${params.id}?api_key=${import.meta.env.VITE_TMDB_KEY}&append_to_response=videos`
      );
      setMovDetails(response.data);
    })()
  }, []);

  function previousPage() {
    if (page > 1) {
      page--;
      setPage(page);
    }
  }

  function nextPage() {
    if (page < maxPage) {
      page++;
      setPage(page);
    }
  }

  function setButtonText(movie) {
    setCart((prevCart) => prevCart.set(movie.id, { title: movie.original_title, url: movie.poster_path }));
    setBuyText("Added");
  }

  return (
    <div className="poster-section">
      {posters.length > 0 ? (
        posters.map((mov) => (
          <div>
            <div key={mov.id}>
              <img className="poster-image" height={"300px"} style={{ cursor: "pointer" }}
                onClick={() => navigate(`/movies/details/${mov.id}`)}
                src={`https://image.tmdb.org/t/p/w500${mov.poster_path}`}
                alt={mov.title} />
            </div>
            <button onClick={() => setButtonText(mov)} className="buy-button">{buyText}</button>
          </div>
        ))

      ) : (
        <p>Loading content</p>
      )}
      <div className="button-container">
        <button className="page-button" style={{ cursor: "pointer" }} onClick={() => previousPage()}>Previous Page</button>
        <button className="page-button" style={{ cursor: "pointer" }} onClick={() => nextPage()} >Next Page</button>
      </div>
      <p id="page-count">Page: {page}/{maxPage}</p>
    </div>
  )
}

export default GenreView;