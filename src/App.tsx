import { Route, Routes } from 'react-router-dom'
import './App.css'
import Landing from './components/Landing'
import Timer from './components/Timer'

function App() {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/timer" element={<Timer />} />
      </Routes>
    </div>
  )
}

export default App
