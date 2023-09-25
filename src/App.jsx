import './App.css'
import Fighters from './components/Fighters'
import FightersDetails from './components/FighterDetails'
import { Routes, Route, Link } from "react-router-dom"

function App() {
  return (
  <div id="container">
      <div id="main-section">
        <Routes>
          <Route path="/" element={<Fighters/>} />
        </Routes>
      </div>
  </div>
  )
}

export default App