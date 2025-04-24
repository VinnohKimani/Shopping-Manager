import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Header } from './Components/Header.jsx'
import { ItemInput } from './Components/ItemInput.jsx'

const router = createBrowserRouter([
  
  {
    path: "/input",
    element:<ItemInput/>
  },

  {
    path: "/title",
    element:<Header/>
  },
  {
    path: "/",
    element:<App/>
  }

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   
    <RouterProvider router={router}/>
  </StrictMode>,
)
