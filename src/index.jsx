import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import App from './App'
import NewUser from './NewUser'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import UpdateUser from './UpdateUser'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/add-user',
    element: <NewUser />,
  },
  {
    path: '/update/:id',
    element: <UpdateUser />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
