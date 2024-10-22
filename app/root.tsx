import {
  Links,
  Link,
  Meta,
  Outlet,
  Scripts,
} from "@remix-run/react";

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <title>ManageRPG</title>
        <Links />
      </head>
      <header>
        <div>
          <Link to="."> 
          <h1> Manage RPG </h1>
          </Link>
        </div>
      </header>
      <body>
        <Outlet />
        
        <Scripts />
      </body>
    </html>
  );
}