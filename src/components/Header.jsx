import "./Header.css";

function Header() {
    return (
        <div className ="navbar">
            {/* nav bar */}
            <h1 style={{cursor:'pointer'}}>WStream4U</h1>
            <div className="left">
                <button>Home</button>
                <button>About</button>
                <button>TV Shows</button>
                <button>Movies</button>
                <button>Popular</button>
                <button>My Watchlist</button>
            </div>

            <div>
                <button>Login</button>
                <button>Signup</button>
            </div>

        </div>
    );
}

export default Header;