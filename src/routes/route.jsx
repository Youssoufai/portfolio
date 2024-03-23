import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import App from '../App.jsx'
import Services from '../components/Services.jsx'
import Playground from '../components/Playground.jsx'
import Case from '../components/Case.jsx'
import About from '../components/About.jsx'
export const oute = createBrowserRouter([
    { path: "/", element: <App /> },
    { path: "/playground", element: <Playground /> },
    { path: "/services", element: <Services /> },
    { path: "/case", element: <Case /> },
    { path: "/about", element: <About /> }
])