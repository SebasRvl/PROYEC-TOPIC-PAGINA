// src/pages/Home.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';  // Importa Link de react-router-dom
import '../css/Home.css';

// Importación del video único
import Video1 from '../assets/IMAGENES/video1.mp4';
// Importación del logo
import Logo from '../assets/IMAGENES/Logo.png';

function Home() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false); 

    // Al montar el componente, revisa si hay un token en el localStorage
    useEffect(() => {
      const token = localStorage.getItem('token');
      if (token) {
        setIsLoggedIn(true); // Si hay un token, el usuario está autenticado
      }
    }, []);

  // Cambia de video automáticamente cada 5 segundos (en caso de que quieras tener un control para futuras ampliaciones)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % 1);  // Solo un video, por lo tanto, no hace el ciclo
    }, 5000); // Cambia de video cada 5 segundos
    return () => clearInterval(interval); // Limpia el intervalo cuando el componente se desmonte
  }, []);  
  
  // Función para simular el inicio/cierre de sesión
  const handleLoginLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(!isLoggedIn); // Cambia el estado de inicio de sesión
  };

  

  return (
    <div className="home">
      {/* Barra de navegación */}
      <header className="header">
        <div className="logo-container">
          <img src={Logo} alt="Logo Fresh Store" className="logo-image" />
          <div className="logo">FRESH STORE</div>
        </div>
        <nav className="nav">
          {/* Usa Link para que las rutas cambien sin recargar la página */}
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
          {isLoggedIn ? (
            <button onClick={handleLoginLogout}>Cerrar sesión</button>
          ) : (
            <Link to="/login">Iniciar Sesión</Link>
          )}
        </nav>
      </header>

      {/* Sección del carrusel */}
      <main className="carousel-section">
        <div className="carousel">
          <video 
            src={Video1}  // Solo un video, así que usamos esta variable directamente
            alt={`Video del carrusel`} 
            className="carousel-video" 
            autoPlay 
            loop 
            muted 
          />
          <div className="carousel-overlay">
            <h1>Dale estilo a tu vida</h1>
          </div>
        </div>
      </main>

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

export default Home;
