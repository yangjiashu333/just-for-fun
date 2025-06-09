import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App';
import Workflow from './pages/workflow';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/workflow',
    element: <Workflow />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
