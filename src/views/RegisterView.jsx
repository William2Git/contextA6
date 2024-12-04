import "./RegisterView.css";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

function RegisterView() {
    return (
        <div>
            <Header />
            <div id="contents">
                <h2>Register</h2>
                <br></br>
                <label>First Name:</label>
                <input type="text"></input>
                <label>Last Name:</label>
                <input type="text"></input>
                <label>Email:</label>
                <input type="text"></input>
                <label>Password:</label>
                <input type="password"></input>
                <label>Confirm Password:</label>
                <input type="password"></input>
                <button id="enter" style={{ cursor: 'pointer' }}>Register</button>
            </div>
            <Footer />
        </div>

    );
}

export default RegisterView;