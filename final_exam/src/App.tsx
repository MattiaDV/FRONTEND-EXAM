import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ProductPage from './Dynamic/dynamic'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/prodotti/:id" element={<ProductPage />} />
    </Routes>
  )
}

export default App
