import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from './routes/Home/Home.jsx'
import { CreateParty } from './routes/CreateParty/CreateParty.jsx'
import { Party } from './routes/Party/Party.jsx'
import { EditParty } from './routes/EditParty/EditParty.jsx'

//Pages

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/party/new",
        element: <CreateParty />
      },
      {
        path: "/party/:id",
        element: <Party />
      },
      {
        path: "/party/edit/:id",
        element: <EditParty />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
