import React from  'react';
import ReactDOM from 'react-dom';
import App from './App';
import {   Omdb,  NoPage,   MovieInfo } from './pages';

import './main.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";



  const router = createBrowserRouter([
    {
      path : "/",
      element: <App />,
    },
    {
        path: "/proyect",
        element: <Omdb />,
      },
         
      {
      path: "/movieinfo",
      element: <MovieInfo />,
    },
    {
      path:"*",
      element: <NoPage />,
    },
   
  ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />

)