import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './store'

import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import { Home } from './pages/Home'
import { Contact } from './pages/Contact'
import { Login } from './pages/Login'
import { ErrorPage } from './pages/ErrorPage'
import { ContactDetails } from './pages/ContactDetails'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />, 
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "login",
        element: <Login />
      },
      // nested routes - identificador unico
      {
        path: "/contact/:id",
        element: <ContactDetails />,
      },
      // navigate para pags nao existentes
      {
        path: "oldcontact",
        element: <Navigate to="/contact" />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>

      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
