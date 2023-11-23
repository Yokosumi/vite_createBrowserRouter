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
        loader: async () => {
          return new Promise((resolve) => {
            resolve([
              111,
              222,
              "lunch",
              "doctor",
              "call",
              "appointment",
              "lunch",
            ]);
          });
        },
      },
      {
        path: "/",
        element: <Navigate to="/welcome" />,
      },
    ],
  },
]);
