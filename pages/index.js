import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// import rotas
import Skills from "../routes/Skills.js";
import App from "./App.js";
import Home from "../routes/Home.js"
import About from "../routes/About.js"

const router = createBrowserRouter([
  {
    path: "/",
    element:<App/>,
    children:[
      {
        path: "/",
        element:<Home/>
      },
      {
        path: "/Skills",
        element:<Skills/>
      },
      {
        path: "/About",
        element:<About/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);