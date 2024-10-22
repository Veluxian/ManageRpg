import { Link } from "@remix-run/react";
import { useState } from "react";

export default function IndexRoute() {
  const [valorUsuario, setValorUsuario] =useState('');
  return (
    <div>
      <label>
        Usuario: 
        <input type="text" name="usuario" id="usuario" value={valorUsuario} onChange={(u) => setValorUsuario(u.target.value)}/>
      </label>
      <br />
      <label>
        Contraseña: 
        <input type="password" name="constraseña" id="contrasena" />
      </label>
      <br />
      <button>
        <Link to={`/inventarioPrincipal/${valorUsuario}`}>Vamos</Link>
      </button>
    </div>
  );
}