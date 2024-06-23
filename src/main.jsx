import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import "./index.css";
import HomePage from "./Pages/HomePage";
import Upload from "./Pages/Upload";
import Result from "./Pages/Result";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/get-started",
    element: <Upload />,
  },

  {
    path: "/result/:email",
    element: <Result />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
