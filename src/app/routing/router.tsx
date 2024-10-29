import { createBrowserRouter } from "react-router-dom";
import { NotFound } from "../../pages/not-found";
import { Routes } from "../../shared/config";
import { Root } from "../../pages/root";
import { Layout } from "../../pages/layout";
import { AddWord } from "../../pages/add-word/indext";

export const router = createBrowserRouter([
  {
    path: Routes.ROOT,
    element: <Layout />,
    children: [
      { path: Routes.ROOT, element: <Root /> },
      { path: Routes.ADD_WORD, element: <AddWord /> },
      { path: Routes.HUB_WORDS, element: <NotFound /> },
      { path: Routes.NOT_FOUND, element: <NotFound /> },
    ],
  },
]);
