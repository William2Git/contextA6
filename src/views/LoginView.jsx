import "./LoginView.css";
import Header from "../components/Header.jsx";
import { useState } from "react";

function LoginView() {
    let [angleA, setAngle] = useState(0);
    let [a, setA] = useState(0);
    let [b, setB] = useState(0);
    const [type, setType] = useState("");

    return (
        <div>
            <Header />
            <div id="contents">
                <label>Angle A (Enter in Degrees)</label>
                <input type="number" value={angleA} onChange={(event) => setAngle(event.target.value)}></input>
                <label>Side a</label>
                <input type="number" value={a} onChange={(event) => setA(event.target.value)}></input>
                <label>Side b</label>
                <input type="number" value={b} onChange={(event) => setB(event.target.value)}></input>
                <label>Triangle Type</label>
                <input type="text" readOnly style={{ cursor: 'no-drop' }} value={type}></input>
            </div>
            <button id ="enter" style={{ cursor: 'pointer' }}>Calculate</button>
        </div>

    );
}

export default LoginView;