import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import ReactDOM from 'react-dom/client'
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CreateMeal from './create-meal/index.jsx';
import CreateHome from './create-home/index.jsx';
import Header from './components/custom/Header.jsx'
import { Toaster } from "@/components/ui/sonner";
import { GoogleOAuthProvider } from '@react-oauth/google';
import ViewMeal from './view-meal/[mealId]/index.jsx';
import path from 'path';
import FindRestaurant from './find-restaurant/index.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },


  {
    path: '/create-meal/home-cooked',
    element: <CreateHome />,
  },

  {
    path: '/create-meal/restaurant',
    element: <FindRestaurant/>,
  },



  {
    path: '/view-meal/:mealId',
    element: <ViewMeal />,
  },


  {
  path: '/create-meal',
  element: <CreateMeal />,
  },
  


]);

// Use createRoot instead of ReactDOM.createRoot
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_AUTH_CLIENT_ID}>
    {/* <Header /> */}
      <Toaster /> 
        <RouterProvider router={router}/>
      </GoogleOAuthProvider>
  </React.StrictMode>
);
