import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './Components/Home';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import AuthProvider from './Components/Provider/AuthProvider';
import { Toaster } from 'react-hot-toast';
import MainLayout from './Components/Layout/MainLayout';
import AddService from './Components/AddService/AddService';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Service from './Components/Service/Service';
import MyReviews from './Components/MyReviews/MyReviews';
import SingleService from './Components/SingleService/SingleService';
import MyServices from './Components/MyServices/MyServices';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import { HelmetProvider } from 'react-helmet-async';
const helmetContext = {};

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/service",
        element: <Service></Service>
      },
      {
        path: "/service/:id",
        element: <PrivateRoute><SingleService></SingleService></PrivateRoute>
      },
      {
        path: "/myServices/:email",
        element: <PrivateRoute><MyServices></MyServices></PrivateRoute>
      },
      {
        path: "/addService",
        element: <PrivateRoute><AddService></AddService></PrivateRoute>
      },
      {
        path: "/myReviews",
        element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <HelmetProvider context={helmetContext}>
  <AuthProvider>
        <RouterProvider router={router} />
         <Toaster/>
     </AuthProvider>
  </HelmetProvider>
  </StrictMode>,
)
