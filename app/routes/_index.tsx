import { Link } from "@remix-run/react";

export default function IndexRoute() {
  return (
    <div>
      <p>Vamos a otra pagina</p>
      <Link to="creacionPersonajes">Vamos</Link>
    </div>
  );
}