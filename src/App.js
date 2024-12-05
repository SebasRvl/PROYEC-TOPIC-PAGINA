import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'; // Navbar global
import Footer from './components/Footer'; // Footer global

// Páginas de la aplicación
import Home from './Pages/Home';
import Catalog from './Pages/Catalog';
import Caps from './Pages/Caps';
import Kids from './Pages/Kids';
import Login from './Pages/Login';
import Men from './Pages/Men';
import NewArrivals from './Pages/NewArrivals';
import Register from './Pages/Register';
import Sales from './Pages/Sales';
import Women from './Pages/Women';
import Favorites from './Pages/Favorites';
import Cart from './Pages/Cart';
import ProductDetails from './Pages/ProductDetails'; // Página de detalles del producto

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navbar */}
        <Navbar />

        {/* Rutas principales */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/caps" element={<Caps />} />
          <Route path="/kids" element={<Kids />} />
          <Route path="/login" element={<Login />} />
          <Route path="/men" element={<Men />} />
          <Route path="/new" element={<NewArrivals />} />
          <Route path="/register" element={<Register />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/women" element={<Women />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<ProductDetails />} /> {/* Ruta dinámica para detalles del producto */}
        </Routes>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
