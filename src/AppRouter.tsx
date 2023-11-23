import App from "./App.tsx";
import { createBrowserRouter, Navigate } from "react-router-dom";
import { PageWelcome } from "./pages/PageWelcome.tsx";
import { PageAbout } from "./pages/PageAbout.tsx";
import { Page404 } from "./pages/Page404.tsx";
import { PageTodos } from "./pages/PageTodos.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Page404 />,
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
        path: "/todos",
        element: <PageTodos />,
      },
      {
        path: "/",
        element: <Navigate to="/welcome" />,
      },
    ],
  },
]);
