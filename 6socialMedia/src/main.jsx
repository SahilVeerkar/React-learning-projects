import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {RouterProvider} from 'react-router-dom' 
import { createBrowserRouter } from 'react-router-dom'


import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import CreatePost, { createPostAction } from './components/CreatePost.jsx'
import Postlist, { postLoader } from './components/Postlist.jsx'
const router=createBrowserRouter([
    {
    path:"/",element:<App/>,children:[ {
    path:"/",element:<Postlist/>, loader: postLoader
  },
  {
    path:"/create-post",element:<CreatePost/>, action: createPostAction
  }]
  }, 
 
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
