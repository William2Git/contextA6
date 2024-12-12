import "./RegisterView.css";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import { useNavigate } from "react-router";
import { useState, useRef } from "react";
import { useStoreContext } from "../context";

function RegisterView() {
  const navigate = useNavigate();
  const { setFirstName, setLastName, setEmail, setPassword, choices, selectGenre, setLoggedIn } = useStoreContext();
  const firstName = useRef('');
  const lastName = useRef('');
  const email = useRef('');
  const password = useRef('');
  const [checkPassword, setCheckPassword] = useState("");
  const genres = [
    'Action',
    'Adventure',
    'Animation',
    'Comedy',
    'Crime',
    'Family',
    'Fantasy',
    'Horror',
    'Music',
    'Science Fiction'
  ];

  function register(event) {
    event.preventDefault();
    setFirstName(firstName.current.value);
    setLastName(lastName.current.value);
    setEmail(email.current.value);
    setPassword(password.current.value);
    setLoggedIn(true);

    console.log(Object.values(choices).includes(true));
    if(!Object.values(choices).includes(true)){
      return alert("Please select at least one preferred genre");
    }
    if (password.current.value == checkPassword) {
      alert("Account Successfully Created")
      return navigate("/movies/genre/28");
    }

    return alert("Passwords do not match. Please re-enter your password correctly")
  }

  return (
    <div>
      <Header />
      <div className="register-form">
        <div id="contents">
          <h2>Register</h2>
          <form onSubmit={(event) => { register(event) }}>
            <label>First Name:</label>
            <input type="text" ref={firstName} required></input>
            <label>Last Name:</label>
            <input type="text" ref={lastName} required></input>
            <label>Email:</label>
            <input type="email" ref={email} required></input>
            <label>Password:</label>
            <input type="password" ref={password} required></input>
            <label>Confirm Password:</label>
            <input type="password" value={checkPassword} onChange={(event) => { setCheckPassword(event.target.value) }} required></input>
            <button id="enter" style={{ cursor: 'pointer' }}>Register</button>
          </form>
        </div>
        <div className="genres-checklist">
          <h2>Genres</h2>
          <p>Please choose up to 10 preferred genres</p>
          {genres.map((item, i) => (
            <div key={i}>
              <input
                type="checkbox"
                checked={choices[item]}
                onChange={() => selectGenre(item)}
                id={`checkbox-${i}`}
                style={{cursor:'pointer'}}
              />
              <label className="genre-name">{item}</label>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default RegisterView;