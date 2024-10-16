import type { LinksFunction } from "@remix-run/node";
import { Link ,Outlet } from "@remix-run/react";
import stylesUrl from "~/styles/ManageRpg.css";

export const links: LinksFunction = () =>[
    {rel:"stylesheet", href: stylesUrl },
];

export default function manageRoute(){
    return(
        <div className="manage-layout">
            <header className="manage-header">
                <div className="container">
                    <h1 className="home-link">
                        <Link 
                        to="/"
                        title="ManageRpg>"
                        aria-label="ManageRpg"
                        >
                            <span className="logo"> ManageRpg</span>
                            <span className="logo-medium">Inventario para ti</span>
                        </Link>
                    </h1>
                </div>
            </header>

            <main className="manage-main">
                <div className="container">

                    <div className="manage-list">
                        <Link to="."> Ve un ejemplo </Link>
                        <p>Aqui hay unos pocos</p>
                        <ul>
                            <li>
                                <Link to="../personaje/Azar">Random</Link>
                            </li>
                        </ul>
                        <Link to="../personajes/new" className="button">
                            Crea tu heroe
                        </Link>
                    </div>

                    <div className="manage-outlet">
                        <Outlet />
                    </div>
                </div>
            </main>

        </div>
    );
}