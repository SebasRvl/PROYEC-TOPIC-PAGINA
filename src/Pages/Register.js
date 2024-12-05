import React from 'react';
import { useNavigate } from 'react-router-dom';
import SideImage from '../assets/IMAGENES/Logo.png'; // Ruta de la imagen lateral
import '../css/Login.css'; // Usa el mismo CSS que Login

function Register() {
  const navigate = useNavigate();

  // Maneja el evento de registro
  const handleRegister = (e) => {
    e.preventDefault();
    navigate('/'); // Navega a la pantalla de Home después del registro
  };

  // Redirige al usuario a la pantalla de inicio de sesión
  const handleLoginRedirect = () => {
    navigate('/login'); // Navega a la pantalla de Login
  };

  return (
    <div className="login-page">
      <header className="login-header">
        <h1 className="store-title">Fresh Store</h1>
      </header>
      <div className="login-container">
        {/* Imagen en el lado izquierdo */}
        <img
          src={SideImage}
          alt="Imagen de bienvenida"
          className="login-image"
        />
        {/* Contenedor del formulario */}
        <div className="login-form-container">
          <h3 className="login-instructions">
            Crea tu cuenta para comenzar a explorar Fresh Store
          </h3>
          <form className="login-form" onSubmit={handleRegister}>
            <input
              type="text"
              placeholder="Nombre completo*"
              className="login-input"
              required
            />
            <input
              type="email"
              placeholder="Correo Electrónico*"
              className="login-input"
              required
            />
            <input
              type="password"
              placeholder="Contraseña*"
              className="login-input"
              required
            />
            <input
              type="password"
              placeholder="Confirmar Contraseña*"
              className="login-input"
              required
            />
            <p className="login-terms">
              Al continuar, acepto la <span>Política de privacidad</span> y los <span>Términos de uso</span> de Fresh Store.
            </p>
            <button type="submit" className="login-btn">Registrarme</button>
            <div className="register-option">
              <p>
                ¿Ya tienes una cuenta?{' '}
                <span
                  className="register-link"
                  onClick={handleLoginRedirect}
                >
                  Inicia sesión aquí
                </span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
