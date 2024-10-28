import { createBrowserRouter } from "react-router-dom";
import { NotFound } from "../../pages/not-found";
import { Routes } from "../../shared/config";
import { Layout } from "../../pages/layout";
import { RoutesGroup } from "./components";

export const router = createBrowserRouter([
  {
    path: Routes.ROOT,
    element: <Layout />,
    children: [
      {
        path: Routes.ROOT,
        element: <RoutesGroup onlyUnauthorized />,
        children: [
          { path: Routes.ROOT, element: <h1>root</h1> },
          {
            path: Routes.REGISTER,
            element: <h1>register</h1>,
          },
          {
            path: Routes.HOME,
            element: <h1>home</h1>,
          },
        ],
      },
      { path: Routes.NOT_FOUND, element: <NotFound /> },
    ],
  },
]);
