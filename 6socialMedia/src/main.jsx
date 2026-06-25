import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {RouterProvider} from 'react-router-dom' 
import { createBrowserRouter } from 'react-router-dom'


import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import CreatePost from './components/CreatePost.jsx'
import Postlist from './components/Postlist.jsx'
const router=createBrowserRouter([
    {
    path:"/",element:<App/>,children:[ {
    path:"/",element:<Postlist/>
  },
  {
    path:"/create-post",element:<CreatePost/>
  }]
  }, 
 
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
