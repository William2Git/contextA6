import "./SettingsView.css";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import { useState, useEffect, useRef } from "react";
import { useStoreContext } from "../context";

function SettingsView() {
    const { password, email, firstName, lastName, choices, selectGenre, setFirstName, setLastName } = useStoreContext();
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
        alert("Name has been successfully changed!");
    }

    return (
        <div>
            <Header />
            <h1>Settings</h1>
            <Footer />
        </div>
    );
}

export default SettingsView;