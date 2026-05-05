import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ProductPage from './Dynamic/dynamic'
import CategoriesPage from './pages/Categories'
import ProductsPage from './pages/ProductsPage'
import Cart from './pages/cart'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/prodotti/:id" element={<ProductPage />} />
      <Route path="/categories" element={<CategoriesPage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/carrello" element={<Cart />} />
    </Routes>
  )
}

export default App
