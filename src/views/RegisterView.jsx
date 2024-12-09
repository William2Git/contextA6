import "./RegisterView.css";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import {useNavigate} from "react-router";

function RegisterView() {
  const navigate= useNavigate();

  function register(event) {
    event.preventDefault();
    alert("Account Successfully Created")
    return navigate("/movies/genre/28");
  }

  return (
    <div>
      <Header />
      <div id="contents">
        <h2>Register</h2>
        <form onSubmit={(event) => { register(event) }}>
          <label>First Name:</label>
          <input type="text"></input>
          <label>Last Name:</label>
          <input type="text"></input>
          <label>Email:</label>
          <input type="email"></input>
          <label>Password:</label>
          <input type="password"></input>
          <label>Confirm Password:</label>
          <input type="password"></input>
          <button id="enter" style={{ cursor: 'pointer' }}>Register</button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default RegisterView;