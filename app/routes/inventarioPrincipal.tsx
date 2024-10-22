import {Link, Outlet} from "@remix-run/react";

export default function inventarioPrincipal() {
    return (
        <div>
            <span> Bienvenido </span>
            <Outlet />
        </div>
    );
}