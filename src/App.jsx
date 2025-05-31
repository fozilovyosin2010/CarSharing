import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./pages/Home/Home";
import "./index.css";
import Booking from "./pages/Booking/Booking";

const App = () => {
  let router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "booking",
          element: <Booking />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
