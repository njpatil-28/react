import './App.css'
import Navbar from './components/Navbar.jsx'
import React from 'react'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Contact from './components/contact.jsx'
import User from './components/user.jsx'
import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Github from './components/github.jsx'
import { githubInfoLoader } from './components/githubInfoLoader.jsx'


function App() {
  // const router = createBrowserRouter([
  //   {
  //     path: '/',
  //     element: <Navbar />,
  //     children: [
  //       {
  //         path: '/',
  //         element: <Home />
  //       },
  //       {
  //         path: '/about',
  //         element: <About />
  //       },
  //       {
  //         path: '/contact',
  //         element: <Contact />  
  //       },
  //       {
  //         path: '/user/:userId',
  //         element: <User />
  //       },
  //       {
  //         loader: githubInfoLoader,
  //         path: 'github',
  //         element: <Github />,

  //       }
  //     ]
  //   },
  // ])

  const router =createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element ={<Navbar />}>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/user/:userId' element={<User />} />
        <Route loader={githubInfoLoader} path='github' element={<Github />} />
      </Route>
  )
  )

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
