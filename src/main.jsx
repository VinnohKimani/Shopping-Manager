import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Contacts from "./Components/Contacts.jsx";
import Page from "./Components/Page.jsx";

const router = createBrowserRouter([
  {
    path: "/contactUs",
    element: <Contacts />,
  },

  {
    path: "/",
    element: <Page />,
  },
  {
    path: "/shopping-manager",
    element: <App />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
