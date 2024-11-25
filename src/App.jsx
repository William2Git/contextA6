import './App.css'
import Header from "./views/Header.jsx";
import Hero from "./views/Hero.jsx";
import Feature from "./views/Feature.jsx";
import Footer from "./views/Footer.jsx";

function App() {
  return (
    <div style={{overflowX:"hidden"}}>
      <Header/>
      <Hero/>
      <Feature/>
      <Footer/>
    </div>
  )
}

export default App;
