import "./LoginView.css";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import { useNavigate } from "react-router";
import { useState } from 'react';


function LoginView() {
  let [email, setEmail] = useState("");
  let [pass, setPass] = useState("");
  const navigate = useNavigate();

  function login(event) {
    event.preventDefault();
    if (email=="") {
      return alert("Please enter an email");
    }
    if (pass != "iloveyou") {
      return alert("Incorrect password, please try again");
    }
    return navigate("/movies/genre/28");
  }

  return (
    <div>
      <Header />
      <form id="contents" onSubmit={(event)=>{login(event)}}>
        <h2>Login</h2>
        <br></br>
        <label>Email:</label>
        <input type="email" value={email} onChange={(event) => setEmail(event.target.value.trim())}></input>
        <label>Password:</label>
        <input type="password" value={pass} onChange={(event => setPass(event.target.value))}></input>
        <button id="enter" style={{ cursor: 'pointer' }}>Login</button>
      </form>
      <Footer />
    </div>

  );
}

export default LoginView;