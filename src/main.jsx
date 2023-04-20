import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Main from './Component/Firebase/Main';
import Header from './Component/Header';
import Register from './Component/Register';
import Login from './Component/Login';
import Home from './Component/Home';
import AuthProviders from './Component/Providers/AuthProviders';
import Orders from './Component/Orders';
import PrivateRoute from './PribateRoute/PrivateRoute';
import Profile from './Component/Profile';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: '/', element: <Home></Home> },
      { path: '/login', element: <Login></Login> },
      { path: '/register', element: <Register></Register> },
      { path: '/orders', element: <PrivateRoute><Orders></Orders></PrivateRoute> },
      { path: '/profile', element: <PrivateRoute><Profile></Profile></PrivateRoute> },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router}></RouterProvider>
    </AuthProviders>
  </React.StrictMode>,
)
