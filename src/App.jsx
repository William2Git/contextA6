import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import HomeView from "./views/HomeView.jsx";
import RegisterView from "./views/RegisterView.jsx";
import LoginView from "./views/LoginView.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/register" element={<RegisterView/>}/>
        <Route path="/login" element={<LoginView/>}/>
      </Routes>
    </BrowserRouter>

  )
}

export default App;
