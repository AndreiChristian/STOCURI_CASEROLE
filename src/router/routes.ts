import App from "@/App";
import { Root } from "@/layout/Root";
import Home from "@/routes/Home";
import Settings from "@/routes/Settings";
import Furnizori from "@/routes/furnizori/Furnizori";
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
        path: "settings",
        Component: Settings
      }
    ]
  },
])
