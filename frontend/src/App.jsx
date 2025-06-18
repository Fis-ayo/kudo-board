import { Routes, Route } from 'react-router-dom'
import Header from "./components/Header/Header"
import BoardCard from "./pages/Board/BoardCard"
import Home from "./pages/Home/Home"
import Footer from "./components/Footer/Footer"
import './App.css'

export default function App() {

  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="frontend/kudo-board/src/pages/Board"
          element={<BoardCard />}
        />
      </Routes>
      <Footer />
    </div>
  )
}


