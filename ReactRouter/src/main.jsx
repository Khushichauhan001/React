import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './layout.jsx'
import About from './Components/AboutUs/AboutUs.jsx'
import Home from './Components/Home/Home.jsx'
import Contact from './Components/Contact/Contact.jsx'
import User from './Components/User/User.jsx'
import Github, {githubInfoLoader} from './Components/Github/Github.jsx'

//creating own router 
//1ST WAY 
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children: [
//       {
//         path: "",
//         element: <Home/>
//       } ,
//       {
//         path: "about",     // / to already lga hua h path m toh islie yha ni lga rhe h 
//         element: <About/>

//       },
//       {
//         path: "contact",
//         element: <Contact/>
//       }, 
//     ]
//   }
// ])


//2ND METHOD

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>    
     <Route path='' element={<Home/>}/>
     <Route path='about' element={<About/>}/>
     <Route path='contact' element={<Contact/>}/>
     <Route path='user/:userid' element={<User/>}/>
     <Route 
     loader={githubInfoLoader}
     path='github'
      element={<Github/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

