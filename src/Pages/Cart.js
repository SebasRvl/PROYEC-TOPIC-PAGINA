import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/Cart.css';
import Logo from '../assets/IMAGENES/Logo.png';

const Cart = () => {
    const [cartItems, setCartItems] = useState([]);

    const removeItem = (id) => {
        setCartItems(cartItems.filter((item) => item.id !== id));
    };

    const updateQuantity = (id, quantity) => {
        if (quantity < 1) return;
        setCartItems(
            cartItems.map((item) =>
                item.id === id ? { ...item, quantity: quantity } : item
            )
        );
    };

    const calculateTotal = () => {
        return cartItems
            .reduce((total, item) => total + item.price * item.quantity, 0)
            .toFixed(2);
    };

    // Cargar el script de Stripe
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://js.stripe.com/v3/buy-button.js';
        script.async = true;
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div className="cart-page">
            <header className="header">
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
            </header>

            <div className="cart">
                <div className="cart-header">
                    <h1>Mi Carrito</h1>
                </div>
                <div className="cart-content">
                    <div className="cart-items">
                        {cartItems.map((item) => (
                            <div className="cart-item" key={item.id}>
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="cart-item-image"
                                />
                                <div className="cart-item-info">
                                    <h3>{item.name}</h3>
                                    <p>${item.price}</p>
                                    <div className="cart-item-quantity">
                                        <button
                                            onClick={() =>
                                                updateQuantity(item.id, item.quantity - 1)
                                            }
                                            disabled={item.quantity === 1}
                                        >
                                            -
                                        </button>
                                        <span>{item.quantity}</span>
                                        <button
                                            onClick={() =>
                                                updateQuantity(item.id, item.quantity + 1)
                                            }
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                                <button
                                    className="remove-item-btn"
                                    onClick={() => removeItem(item.id)}
                                >
                                    Eliminar
                                </button>
                            </div>
                        ))}
                    </div>
                    <div className="cart-total">
                        <stripe-buy-button
                            buy-button-id="buy_btn_1QSMEqFg6mdpEHN5DsD6tLzH"
                            publishable-key="pk_test_51QRKUHFg6mdpEHN5Kbw87V3PEn4jm3M33P3Q49LwS2FuvM5Lp1kQxD0wpuqLiZPTlaSGfHThGftaiFic8iOcDoZW00ygCvsDaR"
                        ></stripe-buy-button>
                    </div>
                </div>
            </div>

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
};

export default Cart;
