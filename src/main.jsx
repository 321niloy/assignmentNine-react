import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './Component/Header';
import Home from './Component/Home';
import Statics from './Component/Main/statics/Statics';
import Applied from './Component/applied/Applied';
import Blog from './Component/Main/blog/Blog';
import Viewdetails from './Component/fraturefristreview/viewdetails/Viewdetails';
import CardLoader from './Component/loader/CardLoader';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Header></Header>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
        loader:() => fetch("/public/featured.json")
      },
      {
      path:"viewdetails/:id",
      element:<Viewdetails></Viewdetails>,
      loader:({params}) => fetch("/public/featured.json")

      },
      {
        path:'statics',
        element:<Statics></Statics>
      },
      {
        path:'applied',
        element:<Applied></Applied>,
        loader:CardLoader
      },
      {
        path:'blog',
        element:<Blog></Blog>}
    ]
    
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    
  </React.StrictMode>,
)
