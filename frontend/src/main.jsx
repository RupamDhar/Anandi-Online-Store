import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import ProductPage from './ProductPage.jsx'
import WelcomePage from './WelcomePage.jsx'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <WelcomePage/>
  },
  {
    path: '/home',
    element: <App/>
  },
  {
    path: 'product/:id',
    element: <ProductPage/>
  },
  {
    path: '*',
    element: <>Error 404</>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <RouterProvider router={router} />
  // </React.StrictMode>,
)
