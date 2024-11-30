import "./Header.css";
import { useNavigate } from "react-router";

function Header() {
    let navigate = useNavigate();

    return (
        <div className ="navbar">
            <h1 style={{cursor:'pointer'}} onClick ={() => navigate("/")}>WStream4U</h1>
            <div className="left">
                <button onClick={() => navigate("/")}>Home</button>
                <button>About</button>
                <button>TV Shows</button>
                <button>Movies</button>
                <button>Popular</button>
                <button>My Watchlist</button>
            </div>

            <div>
                <button onClick={() => navigate("/login")}>Login</button>
                <button onClick ={() => navigate("/register")}>Signup</button>
            </div>

        </div>
    );
}

export default Header;