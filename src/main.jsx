import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import { oute } from './routes/route.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={oute}>
      <App />
    </RouterProvider>
  </React.StrictMode>,
)
