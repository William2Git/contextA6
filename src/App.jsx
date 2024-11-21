import { useState } from 'react'
import './App.css'
import Header from "./views/Header.jsx";
import Hero from "./views/Hero.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header/>
      <Hero/>
    </div>
  )
}

export default App;
