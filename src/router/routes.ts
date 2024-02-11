import App from "@/App";
import Login from "@/auth/Login";
import { Root } from "@/layout/Root";
import Home from "@/routes/Home";
import Settings from "@/routes/Settings";
import Furnizori from "@/routes/furnizori/Furnizori";
import Products from "@/routes/products/Products";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        path: "/",
        Component: Home
      },
      {
        path: "/home",
        Component: App
      },
      {
        path: "/furnizori",
        Component: Furnizori
      },
      {
        path: "/produse",
        Component: Products
      },
      {
        path: "settings",
        Component: Settings
      }
    ]
  },
  {
    path: "/login",
    Component: Login
  }
])
