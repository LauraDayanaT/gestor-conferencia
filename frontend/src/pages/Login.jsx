import { useState } from 'react';
import './Login.css';
import logo from '../assets/logo.png';

const API_URL = 'http://localhost:8000/api';

//componente funcional de React para la página de login
const Login = () => {
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [errorCredenciales, setErrorCredenciales] = useState(false);
  const [cargando, setCargando] = useState(false);

  //funcion para manejar el envío del formulario de login - se ejecuta cuando el usuario hace submit en el formulario
  const manejarEnvio = async (evento) => {
    evento.preventDefault();
    setErrorCredenciales(false);
    setCargando(true);

    try {
      const respuesta = await fetch(`${API_URL}/login/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ correo, contrasena }),
      });

      if (!respuesta.ok) {
        setErrorCredenciales(true);
        return;
      }

      const datos = await respuesta.json();
      // TODO: guardar token y redirigir según el rol del usuario
      console.log(datos);
    } catch (error) {
      setErrorCredenciales(true);
    } finally {
      setCargando(false);
    }
  };
//mostrar nuevo div en caso de error de credenciales 
  return (
    <div className="login-contenedor">
      <div className="login-tarjeta">
        <img src={logo} alt="Logo" className="login-logo" />
        <h1 className="login-titulo">Iniciar sesión</h1>

        {errorCredenciales && (
          <div className="login-error">Usuario o contraseña inválidos</div>
        )}

        <form onSubmit={manejarEnvio} className="login-formulario">
          <label className="login-etiqueta" htmlFor="correo">
            Correo o usuario
          </label>
          <input
            id="correo"
            type="text"
            className={`login-input ${errorCredenciales ? 'login-input--error' : ''}`}
            value={correo}
            onChange={(evento) => setCorreo(evento.target.value)}
          />

          <label className="login-etiqueta" htmlFor="contrasena">
            Contraseña
          </label>
          <input
            id="contrasena"
            type="password"
            className={`login-input ${errorCredenciales ? 'login-input--error' : ''}`}
            value={contrasena}
            onChange={(evento) => setContrasena(evento.target.value)}
          />

          <a href="/recordar-clave" className="login-enlace-derecha">
            Olvidé mi clave
          </a>

          <div className="login-captcha">CAPTCHA</div>

          <button type="submit" className="login-boton" disabled={cargando}>
            {cargando ? 'Ingresando...' : 'Ingresar'}
          </button>
        </form>

        <div className="login-separador">
          <span>o continuar con</span>
        </div>

        <div className="login-social">
          <button type="button" className="login-boton-social">Google</button>
        </div>

        <p className="login-registro">
          ¿No tienes cuenta? <a href="/registro">Regístrate</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
