import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import './index.css'
import Principal from './pages/principal.jsx';
import { Web3Provider } from './lib/Web3Provider.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query' 

const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/principal",
    element: <Principal />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Web3Provider>
      <QueryClientProvider client={queryClient}> 
        <RouterProvider router={router} />
      </QueryClientProvider>
    </Web3Provider>
  </React.StrictMode>,
)
