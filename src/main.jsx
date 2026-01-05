import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/router.jsx'
import AuthProvider from './providers/AuthProvider.jsx'

const apiUrl = import.meta.env.VITE_API_URL;
console.log("Current API URL:", apiUrl);
if (!apiUrl) {
   console.error("CRITICAL: VITE_API_URL is not set!");
}

ReactDOM.createRoot(document.getElementById('root')).render(
   <React.StrictMode>
      <AuthProvider>
         <RouterProvider router={router} />
      </AuthProvider>
   </React.StrictMode>,
)