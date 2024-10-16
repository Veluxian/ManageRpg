import { Outlet } from "@remix-run/react";

export default function manageRoute(){
    return(
        <div>
            <h1>ManageRpg</h1>
            <main>
                <Outlet />
            </main>
        </div>
    );
}