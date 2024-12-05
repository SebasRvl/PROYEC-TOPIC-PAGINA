import React from 'react';
import '../css/NewArrivals.css'; // Asegúrate de crear un archivo de estilos separado para esta pantalla.
import { Link } from 'react-router-dom';

// Imágenes de los productos nuevos
import New1 from '../assets/IMAGENES/TENIS/T1.png';
import New2 from '../assets/IMAGENES/GORRAS/C1.png';
import New3 from '../assets/IMAGENES/NIÑO-A/N3.png';
import New4 from '../assets/IMAGENES/TENIS/MUJER/TM1.png';
import New5 from '../assets/IMAGENES/NIÑO-A/N5.png';
import New6 from '../assets/IMAGENES/GORRAS/C3.png';
import Logo from '../assets/IMAGENES/Logo.png';

function NewArrivals() {
  return (
    <div className="new-arrivals">
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

      {/* Header con título */}
      <header className="header">
        <div className="header-title">
          <h1>Lo Nuevo (6)</h1>
          <p>Descubre los últimos productos añadidos a nuestra tienda</p>
        </div>
      </header>

      {/* Galería de productos nuevos */}
      <div className="product-gallery">
        <div className="product-card">
          <span className="badge new">Nuevo</span>
          <img src={New1} alt="New 1" className="product-image" />
          <h3>Air Jordan 1 Low</h3>
          <p>Calzado para hombre</p>
          <p>1 color</p>
          <button className="btn">$1,614</button>
        </div>

        <div className="product-card">
          <span className="badge new">Nuevo</span>
          <img src={New2} alt="New 2" className="product-image" />
          <h3>Gorra Forty Seven LA Dodgers No Shot Snapback</h3>
          <p>Caps para hombre</p>
          <p>1 color</p>
          <button className="btn">$750</button>
        </div>

        <div className="product-card">
          <span className="badge new">Nuevo</span>
          <img src={New3} alt="New 3" className="product-image" />
          <h3>Tenis Nike Court Borough Low Recraft</h3>
          <p>Niño/a</p>
          <p>1 color</p>
          <button className="btn">$1,999</button>
        </div>

        <div className="product-card">
          <span className="badge new">Nuevo</span>
          <img src={New4} alt="New 4" className="product-image" />
          <h3>Nike Air Max Nuaxis</h3>
          <p>Calzado para mujer</p>
          <p>1 color</p>
          <button className="btn">$1,199</button>
        </div>

        <div className="product-card">
          <span className="badge new">Nuevo</span>
          <img src={New5} alt="New 5" className="product-image" />
          <h3>Tenis Vans Old Skool </h3>
          <p>Niño/a</p>
          <p>1 color</p>
          <button className="btn">$999</button>
        </div>

        <div className="product-card">
          <span className="badge new">Nuevo</span>
          <img src={New6} alt="New 6" className="product-image" />
          <h3>Gorra adidas Trifolio Baseball</h3>
          <p>Caps para mujer</p>
          <p>1 color</p>
          <button className="btn">$429</button>
        </div>
      </div>
    </div>
  );
}

export default NewArrivals;
