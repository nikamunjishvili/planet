import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  Jupiter_page,
  Mars_page,
  Mercury_page,
  Neptune_page,
  Saturn_page,
  Uranus_page,
  Venus_page,
} from "./Pages/index.tsx";

const reactRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Mercury",
    element: <Mercury_page />,
  },
  {
    path: "/Venus",
    element: <Venus_page />,
  },
  {
    path: "/Earth",
    element: <App />,
  },
  {
    path: "/Mars",
    element: <Mars_page />,
  },
  {
    path: "/Jupiter",
    element: <Jupiter_page />,
  },
  {
    path: "/Saturn",
    element: <Saturn_page />,
  },
  {
    path: "/Uranus",
    element: <Uranus_page />,
  },
  {
    path: "/Neptune",
    element: <Neptune_page />,
  },
  {
    path: "*",
    element: <h1>Page not Found</h1>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={reactRouter} />
  </React.StrictMode>
);
