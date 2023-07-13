import { useState, useEffect } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './pages/Root';
import Drivers from './pages/Drivers';
import Teams from './pages/Teams';
import Races from './pages/Races';
import './App.css'
import DriverDetail from './pages/DriverDetail';

function App() {

  const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {index:true, element: <Drivers />},
      {path: ":driverId", element: <DriverDetail />},
      {
        path: "teams",
        element: <Teams />,
      },
      {
        path: "races",
        element: <Races />,
      },
    ],
  },
]);

  return <RouterProvider router={router} />
}

export default App
