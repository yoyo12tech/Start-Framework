import React from 'react';
import ReactDOM from 'react-dom/client'
import { createBrowserRouter,RouterProvider} from 'react-router-dom';
import Layout from './Layouts/Layout.jsx';
import Home from './pages/home.jsx';
import About from './pages/about.jsx'
import Contact from './pages/contact.jsx';
import Portfolio from './pages/portfolio.jsx';



import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css'

const router = createBrowserRouter([
  {
    path:'/',element:<Layout/>,children:[
      {
        index:true, element:<Home/>
      },
      {
        path:'/about', element:<About/>
      },
      {
        path:'/contact', element:<Contact/>
      },
      {
        path:'/portfolio', element:<Portfolio/>
      },
      {
        path:'*', element:<Home/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>

);