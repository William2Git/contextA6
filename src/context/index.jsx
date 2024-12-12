import { createContext, useState, useContext } from "react";
import { Map } from 'immutable';

const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cart, setCart] = useState(Map());
    const [loggedIn, setLoggedIn] = useState(false);
    const [choices, setChoices] = useState({
        Action: false,
        Adventure: false,
        Animation: false,
        Comedy: false,
        Crime: false,
        Family: false,
        Fantasy: false,
        Horror: false,
        Music: false,
        ScienceFiction: false,
    });

    const selectGenre = (genre) => {
        setChoices((prev) => ({
            ...prev,
            [genre]: !prev[genre],
        }));
    };

    return (
        <StoreContext.Provider value={{
            firstName, setFirstName, lastName, setLastName, email, setEmail,
            password, setPassword, cart, setCart, choices, setChoices, selectGenre, loggedIn, setLoggedIn
        }}>
            {children}
        </StoreContext.Provider>
    );
}

export const useStoreContext = () => {
    return useContext(StoreContext);
}