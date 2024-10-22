import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import CoffeeMachinePage from './components/pages/CoffeeMachinePage';
import CoffeePage from './components/pages/CoffeePage';
import SelectPage from './components/pages/SelectPage';

function App(): JSX.Element {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { path: '/', element: <CoffeePage /> },
        { path: '/select', element: <SelectPage /> },
        { path: '/coffeemachine', element: <CoffeeMachinePage /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
