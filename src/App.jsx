import { createBrowserRouter, RouterProvider } from "react-router-dom"
import React from 'react'
import Home from "./pages/Home"
import Materiais from "./pages/Materiais"
import Sobre from "./pages/Sobre"
import Guia from "./pages/Guia"
import Referencias from "./pages/Referencias"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/materiais",
    element: <Materiais/>
  },
  {
    path: "/sobre-nos",
    element: <Sobre/>
  },
  {
    path: "/guia",
    element: <Guia/>
  },
  {
    path: "/referencias",
    element: <Referencias/>
  }
])

export default function App() {
  return (
    <RouterProvider router={router}/>
  )
}
