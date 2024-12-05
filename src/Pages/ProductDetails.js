import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import '../css/ProductDetails.css'; // Archivo CSS para estilos
import Logo from '../assets/IMAGENES/Logo.png'; // Ruta correcta para el logo

function ProductDetails() {
  const { id } = useParams(); // Obtén el ID del producto desde la URL
  const navigate = useNavigate(); // Hook para navegación

  // Datos locales de ejemplo (pueden venir de una API o estado global)
  const products = [
    {
      id: '1',
      name: 'Gorra Forty Seven LA Dodgers No Shot Snapback',
      description: 'Caps para hombre',
      price: 750,
      image: '/assets/IMAGENES/GORRAS/C1.png', // Ruta desde public
    },
    {
      id: '2',
      name: 'Gorra New Era LA Lakers Seasonal Flower Stone 9Fifty',
      description: 'Caps para hombre',
      price: 850,
      image: '/assets/IMAGENES/GORRAS/C2.png', // Ruta desde public
    },
    {
      id: '3',
      name: 'Gorra adidas Trifolio Baseball',
      description: 'Caps para mujer',
      price: 450,
      image: '/assets/IMAGENES/GORRAS/C3.png', // Ruta desde public
    },
  ];

  // Encuentra el producto basado en el ID
  const product = products.find((item) => item.id === id);

  // Si no se encuentra el producto, mostramos un mensaje de error
  if (!product) {
    return (
      <div className="error-message">
        <h2>Producto no encontrado</h2>
        <p>Por favor, regresa al catálogo para explorar más productos.</p>
        <button className="btn back-button" onClick={() => navigate(-1)}>
          Regresar al catálogo
        </button>
      </div>
    );
  }

  // Función para manejar el botón "Me gusta"
  const handleLike = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    favorites.push(product);
    localStorage.setItem('favorites', JSON.stringify(favorites));
    navigate('/favorites');
  };

  // Función para manejar el botón "Agregar al carrito"
  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      // Si el producto ya está en el carrito, aumenta la cantidad
      existingProduct.quantity += 1;
    } else {
      // Si no, agrégalo al carrito con cantidad inicial de 1
      cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Producto agregado al carrito');
  };

  return (
    <div className="product-details">
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

      {/* Contenedor del producto */}
      <div className="product-container">
        <div className="image-section">
          {/* Imagen del producto seleccionado */}
          <img src={product.image} alt={product.name} className="product-image" />
        </div>
        <div className="details-section">
          <h1 className="product-title">{product.name}</h1>
          <p className="product-description">{product.description}</p>
          <p className="product-price">
            Precio: <span>${product.price}</span>
          </p>
          <div className="buttons-container">
            <button className="btn" onClick={handleLike}>
              Agregar a Me gusta
            </button>
            <button className="btn add-to-cart" onClick={handleAddToCart}>
              Agregar al carrito
            </button>
          </div>
          <button className="btn back-button" onClick={() => navigate(-1)}>
            Regresar al catálogo
          </button>
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

export default ProductDetails;
