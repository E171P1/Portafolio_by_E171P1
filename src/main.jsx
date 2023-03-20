import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/index.css'
import Barv from './components/navbar'
import Home from './components/home'
import Project from './components/project'
import About from './components/About'
import Foot from './components/foot'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/projects',
    element: <Project />
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Barv />
    <RouterProvider router={router} />
    <Foot />
  </React.StrictMode>,
)