import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/root.jsx';
import AddDrink from './routes/AddDrink.jsx';
import EditDrink from './routes/EditDrink.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
  },
  {
    path: '/add_drink',
    element: <AddDrink />
  },
  {
    path: '/edit_drink/:id',
    element: <EditDrink />
  },
  {
    path: '*',
    element: <Root />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);
