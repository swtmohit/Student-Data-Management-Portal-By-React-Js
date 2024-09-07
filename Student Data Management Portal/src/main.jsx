import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css"
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import UserTable from './CrudComponents/UserTable.jsx'
import Home from './CrudComponents/Home.jsx'
import About from './CrudComponents/About.jsx'
import Contact from './CrudComponents/Contact.jsx'
const router = createBrowserRouter([
  {path:"/", element:<App/>, children:[
    {path:"/Admin", element:<UserTable/>},
    {path:"/Home", element:<Home/>},
    {path:"/About", element:<About/>},
    {path:"/Contact", element:<Contact/>}
  ]}
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>

    </RouterProvider>
  </React.StrictMode>,
)
