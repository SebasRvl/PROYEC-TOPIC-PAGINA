import React from 'react';
import '../css/Caps.css';
import { Link } from 'react-router-dom';

// Imágenes de los productos de caps
import Cap1 from '../assets/IMAGENES/GORRAS/C1.png';
import Cap2 from '../assets/IMAGENES/GORRAS/C2.png';
import Cap3 from '../assets/IMAGENES/GORRAS/C3.png';
import Cap4 from '../assets/IMAGENES/GORRAS/C4.png';
import Cap5 from '../assets/IMAGENES/GORRAS/C5.png';
import Cap6 from '../assets/IMAGENES/GORRAS/C6.png';
import Logo from '../assets/IMAGENES/Logo.png';

function Caps() {
  const products = [
    {
      id: '1',
      name: 'Gorra Forty Seven LA Dodgers No Shot Snapback',
      description: 'Caps para hombre',
      price: 750,
      image: Cap1,
      badge: 'Nuevo',
    },
    {
      id: '2',
      name: 'Gorra New Era LA Lakers Seasonal Flower Stone 9Fifty',
      description: 'Caps para hombre',
      price: 850,
      image: Cap2,
    },
    {
      id: '3',
      name: 'Gorra adidas Trifolio Baseball',
      description: 'Caps para mujer',
      price: 450,
      image: Cap3,
      badge: 'Nuevo',
    },
    {
      id: '4',
      name: 'Gorra Vans Curved Bill Jockey',
      description: 'Caps para hombre',
      price: 550,
      image: Cap4,
    },
    {
      id: '5',
      name: 'Gorra New Era New York Yankees 9Twenty',
      description: 'Caps para mujer',
      price: 480,
      image: Cap5,
      badge: '-25%',
    },
    {
      id: '6',
      name: 'Gorra New Era New York Yankees MLB 9Forty',
      description: 'Caps para hombre',
      price: 650,
      image: Cap6,
    },
  ];

  return (
    <div className="caps">
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
          <h1>Catálogo de Gorras ({products.length})</h1>
          <p>Encuentra tu estilo con las mejores gorras</p>
        </div>
      </header>

      {/* Galería de productos */}
      <div className="product-gallery">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            {product.badge && <span className={`badge ${product.badge === 'Nuevo' ? 'new' : 'discount'}`}>{product.badge}</span>}
            <img src={product.image} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>1 color</p>
            {/* Enlace al detalle del producto */}
            <Link to={`/product/${product.id}`} className="btn">
              ${product.price}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Caps;
