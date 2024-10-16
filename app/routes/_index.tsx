import type { LinksFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import stylesUrl from "~/styles/index.css";

export const links: LinksFunction = () =>[
  {rel: "stylesheet", href: stylesUrl },
];

export default function IndexRoute() {
  return (
    <div className="containter">
      <div className="content">
        <h1>Manage<span>RPG</span></h1>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="ManageRpg"> Pagina principal</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}