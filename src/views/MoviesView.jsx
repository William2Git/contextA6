import "./MoviesView.css";
import { Outlet, useNavigate } from "react-router";
import Genres from "../components/Genres.jsx";
import Footer from "../components/Footer.jsx";

function MoviesView() {
    const navigate = useNavigate();
    const genres = [
        { id: 28, genre: 'Action' },
        { id: 12, genre: 'Adventure' },
        { id: 16, genre: 'Animation' },
        { id: 35, genre: 'Comedy' },
        { id: 80, genre: 'Crime' },
        { id: 10751, genre: 'Family' },
        { id: 14, genre: 'Fantasy' },
        { id: 27, genre: 'Horror' },
        { id: 10402, genre: 'Music' },
        { id: 878, genre: 'Science Fiction' },
    ];

    return (
        <div>
            <div className="navbar">
                <h1 style={{ cursor: 'pointer' }} onClick={() => navigate("/")}>WStream4U</h1>
                <div className="left">
                    <button onClick={() => navigate("/")}>Home</button>
                    <button>About</button>
                    <button>TV Shows</button>
                    <button>Movies</button>
                    <button>Popular</button>
                    <button>My Watchlist</button>
                </div>

                <div id="profile">
                    <button>User Profile</button>
                    <button onClick={() => navigate("/login")}>Logout</button>
                </div>

            </div>
            <br></br>
            <div className="middle">
                <Genres genresList={genres} />
                <Outlet />
            </div>
            <br></br>
            <br></br>
            <br></br>
            <Footer />
        </div>
    )
}

export default MoviesView;