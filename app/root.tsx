import { LiveReload, 
         Outlet,
         Links, 
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";
import globalLargeStylesUrl from "~/styles/global-larges.css";
import globalMediumStylesUrl from "~/styles/global-medium.css";
import globalStylesUrl from "~/styles/global.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", 
    href: globalStylesUrl,
  },
  {
    rel: "stylesheet", 
    href: globalLargeStylesUrl,
    media: "print, (min-width: 640px)",
  },
  {
    rel: "stylesheet",
    href: globalMediumStylesUrl,
    media: "screen and (min-width: 1024)",
  },
]

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <title>Remix: So great, it's funny!</title>
        <Links />
      </head>
      <body>
        <Outlet />
        <LiveReload />
      </body>
    </html>
  );
}