import "./MoviesView.css";
import { Outlet } from "react-router";
import Genres from "../components/Genres.jsx";
import Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx";
import { useStoreContext } from "../context";

function MoviesView() {
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
  const list = [];

  const {choices} = useStoreContext();

  console.log();
  console.log(genres[0]);

  return (
    <div>
      <Header />
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