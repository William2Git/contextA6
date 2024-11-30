import "./MoviesView.css";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import {useNavigate} from "react-router";

function MoviesView() {
    const navigate = useNavigate();
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
            <h1>Welcome!</h1>

            {/* <Footer/> */}
        </div>

    )
}

export default MoviesView;