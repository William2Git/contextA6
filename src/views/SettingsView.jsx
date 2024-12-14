import "./SettingsView.css";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import { useState, useEffect, useRef } from "react";
import { useStoreContext } from "../context";

function SettingsView() {
    const { email, firstName, lastName, choices, selectGenre, setFirstName, setLastName } = useStoreContext();
    const [fName, setfName] = useState(firstName);
    const [lName, setlName] = useState(lastName);
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

    function changeName(event) {
        event.preventDefault();
        if (fName == firstName) {
            return alert("No changes were made. Please input the changes you want before clicking this button.")
        }
        setFirstName(fName);
        setLastName(lName);
        alert("Name has been successfully changed!");
    }

    return (
        <div>
            <Header />
            <h1>User Settings</h1>
            <div className="settings">
                <div className="profile">
                    <form className="names" onSubmit={(event) => { changeName(event) }}>
                        <label>First Name:</label>
                        <input type="text" value={fName} onChange={(event) => setfName(event.target.value)} required></input>
                        <label>Last Name:</label>
                        <input type="text" value={lName} onChange={(event) => setlName(event.target.value)} required></input>
                        <button>Change First Name and Last Name</button>
                    </form>
                    <label>Email:</label>
                    <input type="email" style={{ cursor: "no-drop" }} value={email} readOnly ></input>
                </div>
                <div className="checklist">
                    <h2>Genres</h2>
                    <p>Please choose up to 10 preferred genres</p>
                    {genres.map((item, i) => (
                        <div key={i}>
                            <input
                                type="checkbox"
                                checked={choices[item]}
                                onChange={() => selectGenre(item)}
                                id={`checkbox-${i}`}
                                style={{ cursor: 'pointer' }}
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

export default SettingsView;