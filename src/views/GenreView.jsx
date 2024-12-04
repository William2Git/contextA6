import "./GenreView.css";
import axios from "axios";
import { useParams, useNavigate } from "react-router";
import { useEffect, useState } from "react";

function GenreView() {
    let [page, setPage] = useState(1);
    let [posters, setPosters] = useState([]);
    let [maxPage, setMaxPage] = useState(0);
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        (async function getGenre() {
            const response = await axios.get(
                `https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_TMDB_KEY}&with_genres=${params.id}&page=${page}`
            );
            setPosters(response.data.results);
            setMaxPage(response.data.total_pages);
        })()
    }, [params.id, page]);

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

    return (
        <div className="poster-section">
            {posters.length > 0 ? (
                posters.map((mov) => (
                    <img className="poster-image" key={mov.id} height={"300px"} style={{ cursor: "pointer" }}
                        onClick={() => navigate(`/movies/details/${mov.id}`)}
                        src={`https://image.tmdb.org/t/p/w500${mov.poster_path}`}
                        alt={mov.title} />
                ))

            ) : (
                <p>Loading content</p>
            )}
            <div className="button-container">
                <button className="page-button" style={{ curosr: "pointer" }} onClick={() => previousPage()}>Previous Page</button>
                <button className="page-button" style={{ cursor: "pointer" }} onClick={() => nextPage()} >Next Page</button>
            </div>
            <p id="page-count">Page: {page}/{maxPage}</p>
        </div>
    )
}

export default GenreView;