import App from "./App.tsx";
import { createBrowserRouter } from "react-router-dom";
import { PageWelcome } from "./pages/PageWelcome.tsx";
import { PageAbout } from "./pages/PageAbout.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/welcome",
        element: <PageWelcome />,
      },
      {
        path: "/about",
        element: <PageAbout />,
      },
      {
        path: "/",
        element: <PageWelcome />,
      },
    ],
  },
]);
