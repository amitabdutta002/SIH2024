import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout/Layout.jsx'
import Home from './components/Home.jsx'
import Courses from './components/Courses.jsx'
import Html from './components/courses/Html.jsx'
import Overview from './components/Overview.jsx'
import Contact from './components/Contact.jsx'
import Quiz from './components/Quiz.jsx'
import Quizdashboard from './components/Quizdashboard.jsx'
import Login from './components/Auth/Login.jsx'
import Register from './components/Auth/Register.jsx'
import { CSS } from './components/courses/CSS.jsx'
import { Javascript } from './components/courses/Javascript.jsx'
import { Cplus } from './components/courses/Cplus.jsx'
import { Dsa } from './components/courses/Dsa.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element: <Layout/>,
    children:[
      {
        path:"",
        element:<Home/>
      },
      {
        path:"login",
        element:<Login/>
      },
      {
        path:"register",
        element:<Register/>
      },
      {
        path:"overview",
        element:<Overview/>
      },
      {
        path:"contact",
        element:<Contact/>
      },
      {
        path:"quiz",
        element:<Quiz/>
      },
      {
        path:"quizdashboard",
        element:<Quizdashboard/>
      },
      {
        path:"courses",
        element:<Courses/>,
      },
      // courses
      {
        path:"html",
        element:<Html/>
      },
      {
        path:"css",
        element:<CSS/>
      },
      {
        path:"javascript",
        element:<Javascript/>
      },
      {
        path:"cpp",
        element:<Cplus/>
      },
      {
        path:"dsa",
        element:<Dsa/>
      },
      // {
      //   path:"java",
      //   element:<java/>
      // },
      // {
      //   path:"python",
      //   element:<py/>
      // },
      // {
      //   path:"sql",
      //   element:</>
      // },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
