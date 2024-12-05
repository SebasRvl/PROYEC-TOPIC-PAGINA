import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/Favorites.css'; // Asegúrate de que la ruta sea correcta
import Logo from '../assets/IMAGENES/Logo.png'; // Asegúrate de que la ruta sea correcta

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  // Cargar los productos favoritos desde localStorage
  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  }, []);

  // Eliminar un producto de los favoritos
  const removeFavorite = (productId) => {
    const updatedFavorites = favorites.filter(product => product.id !== productId);
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  return (
    <div className="favorites">
      {/* Barra de navegación */}
      <div className="navbar">
        <div className="logo-container">
          <img src={Logo} alt="Logo Fresh Store" className="logo-image" />
          <div className="logo">FRESH STORE</div>
        </div>
        <nav className="nav">
          <Link to="/catalog">Catálogo</Link>
          <Link to="/new">Lo Nuevo</Link>
          <Link to="/sales">Rebajas</Link>
          <Link to="/men">Hombre</Link>
          <Link to="/women">Mujer</Link>
          <Link to="/kids">Niño/a</Link>
          <Link to="/caps">Caps</Link>
          <input type="text" placeholder="Buscar..." className="search-input" />
          <Link to="/favorites">Me Gusta</Link>
          <Link to="/cart">Carrito</Link>
          <Link to="/login">Iniciar Sesión</Link>
        </nav>
      </div>

      {/* Contenido de Favoritos */}
      <div className="favorites-content">
        <h1>Favoritos</h1>
        <p>Los productos que agregues a tus favoritos se guardarán aquí.</p>

        {/* Lista de productos favoritos */}
        <div className="favorites-gallery">
          {favorites.length > 0 ? (
            favorites.map((product) => (
              <div key={product.id} className="favorite-item">
                <img
                  src={product.image}
                  alt={product.name}
                  className="favorite-image"
                />
                <div className="favorite-info">
                  <h3>{product.name}</h3>
                  <p>${product.price}</p>
                  <button
                    className="remove-favorite"
                    onClick={() => removeFavorite(product.id)}
                  >
                    Eliminar de favoritos
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p>No tienes productos en favoritos.</p>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-section">
          <h3>VISÍTANOS</h3>
          <p>FreshStore.com</p>
        </div>
        <div className="footer-section">
          <h3>FRESH STORE</h3>
          <p>LLÁMANOS</p>
          <p>449-156-93-65</p>
        </div>
        <div className="footer-section">
          <h3>SÍGUENOS</h3>
          <p>Facebook</p>
          <p>Instagram</p>
        </div>
      </footer>
    </div>
  );
}

export default Favorites;
