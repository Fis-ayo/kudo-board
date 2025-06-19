import { Routes, Route } from 'react-router-dom'
import Header from "./components/Header/Header"
import BoardDetails from "./pages/Board/BoardDetails"
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
          path="/board/:id"
          element={<BoardDetails />}
        />
      </Routes>
      <Footer />
    </div>
  )
}


