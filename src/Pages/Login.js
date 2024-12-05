import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SideImage from '../assets/IMAGENES/Logo.png'; // Ruta de la imagen lateral
import '../css/Login.css'; // Importa el archivo CSS
import axios from 'axios'; // Importa axios para hacer las solicitudes HTTP

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); // Para mostrar mensajes de error
  const navigate = useNavigate();

  // Maneja el evento de inicio de sesión
  const handleLogin = async (e) => {
    e.preventDefault();
    
    setErrorMessage(''); // Resetea el mensaje de error antes de intentar hacer login
    console.log(`CORREO: ${email} - PASSWORD: ${password} `);
    try {
      // Accede a la URL de la API desde la variable de entorno
      const response = await axios.post(`http://localhost:3005/users/login`, {
        email: email,
        password: password
      });

      // Si la autenticación es exitosa, recibe el token y redirige
      if (response.data.token) {
        localStorage.setItem('token', response.data.token); // Guarda el token en localStorage o en cookies
        navigate('/'); // Navega a la pantalla principal ("/")
      } else {
        alert('Usuario o contraseña incorrectos');
      }
    } catch (error) {
      console.error('Error al intentar iniciar sesión:', error);
      
      if (error.response) {
        // Si la respuesta del backend tiene un mensaje de error
        setErrorMessage(error.response.data.message || 'Hubo un error al iniciar sesión.');
      } else {
        setErrorMessage('Hubo un error al intentar conectarse al servidor.');
      }
    }
  };

  // Redirige al usuario a la pantalla de registro
  const handleRegisterRedirect = () => {
    navigate('/register'); // Navega a la pantalla de Register
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
            Ingresa tu correo electrónico para registrarte o iniciar sesión
          </h3>
          {/* Mostrar el mensaje de error si existe */}
          {errorMessage && <p>{errorMessage}</p>}
          <form className="login-form" onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Correo Electrónico*"
              className="login-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Actualiza el estado del email
              required
            />
            <input
              type="password"
              placeholder="Contraseña"
              className="login-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Actualiza el estado de la contraseña
              required
            />
            <p className="login-terms">
              Al continuar, acepto la <span>Política de privacidad</span> y los <span>Términos de uso</span> de Fresh Store.
            </p>
            <button type="submit" className="login-btn">Iniciar Sesión</button>
            <div className="register-option">
              <p>
                ¿No tienes cuenta?{' '}
                <span
                  className="register-link"
                  onClick={handleRegisterRedirect}
                >
                  Regístrate aquí
                </span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
