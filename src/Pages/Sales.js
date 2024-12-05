import React, { useState, useEffect } from "react";

import "../css/Sales.css"; // Asegúrate de crear un archivo de estilos separado para esta pantalla.
import { Link, useNavigate } from "react-router-dom";

import Logo from "../assets/IMAGENES/Logo.png";

function Sales() {
  const [products, setProducts] = useState([]); // Estado para almacenar los productos
  const [loading, setLoading] = useState(true); // Estado para manejar el loading
  const navigate = useNavigate();

  // Función para obtener los productos desde la API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "http://localhost:3005/productos/descuentos"
        ); // Cambia esta URL por tu endpoint
        const data = await response.json();
        setProducts(data); // Guarda los productos en el estado
        setLoading(false); // Indica que terminó de cargar
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false); // Indica que terminó de cargar aunque haya un error
      }
    };

    fetchProducts();
  }, []); // Se ejecuta solo una vez al montar el componente

  // Función para manejar el clic en el botón y navegar al detalle del producto
  const handleProductClick = (product) => {
    navigate(`/product/${product.id}`, { state: { product } });
  };

  return (
    <div className="sales">
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
          <h1>Rebajas ({products.length})</h1>
          <p>Descubre nuestros productos en oferta</p>
        </div>
      </header>

      {/* Galería de productos en rebaja */}
      <div className="product-gallery">
        {products.map((product) => {
          // Construir la ruta de la imagen usando el ID del producto
          let imagePath;
          try {
            imagePath = require(`../assets/P${product.IdProducto}.png`); // Cambia la extensión según corresponda (e.g., .png)
          } catch (error) {
            console.error(
              `No se encontró la imagen para el producto con ID ${product.id}`
            );
            imagePath = Logo; // Imagen por defecto si no se encuentra la imagen específica
          }

          return (
            <div key={product.id} className="product-card">
              {product.badge && (
                <span
                  className={`badge ${
                    product.badge === "Nuevo" ? "new" : "discount"
                  }`}
                >
                  {product.badge}
                </span>
              )}
              <img
                src={imagePath}
                alt={product.name}
                className="product-image"
              />
              <h3>{product.nombre}</h3>
              <p>{product.description}</p>
              <p>1 color</p>
              <button
                className="btn-discount"
                onClick={() => handleProductClick(product)}
              >
                ${product.precio.toLocaleString()}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Sales;
