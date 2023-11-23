import App from "./App.tsx";
import { createBrowserRouter, Navigate } from "react-router-dom";
import { PageWelcome } from "./pages/PageWelcome.tsx";
import { loader as nounLoader } from "./components/loader.tsx";
import { PageAbout } from "./pages/PageAbout.tsx";
import { Page404 } from "./pages/Page404.tsx";
import { PageTodos } from "./pages/PageTodos.tsx";
import { PageNouns } from "./pages/PageNouns.tsx";
import { PageEmployees1 } from "./pages/PageEmployees1.tsx";
import { PageEmployees2 } from "./pages/PageEmployees2.tsx";

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
        path: "/nouns",
        element: <PageNouns />,
        loader: nounLoader,
      },
      {
        path: "/emp1",
        element: <PageEmployees1 />,
      },
      {
        path: "/emp2",
        element: <PageEmployees2 />,
      },
      {
        path: "/",
        element: <Navigate to="/welcome" />,
      },
    ],
  },
]);
