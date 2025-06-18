import { Routes, Route } from 'react-router-dom'
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


