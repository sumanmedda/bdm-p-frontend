import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import SendMails from './components/SendMails.jsx';
import AddClients from './components/AddClients.jsx';
import Clients from './components/Clients.jsx';
import Home from './components/Home.jsx';
import App from './route/App.jsx';

let route = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/clients',
        element: <Clients />
      },
      {
        path: '/add-clients',
        element: <AddClients />
      },
      {
        path: '/send-mails',
        element: <SendMails />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={route}/>
  </React.StrictMode>,
)
