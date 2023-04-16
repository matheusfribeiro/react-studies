import './App.css'
import Axios from 'axios'
import { useEffect, useState } from 'react'
import {createBrowserRouter, createRoutesFromElements, Route, Link, Outlet, RouterProvider} from 'react-router-dom' 
import { Home } from './pages/Home'
import { Menu } from './pages/Menu'
import { Contact, dataLoader } from './pages/Contact'
import { Navbar } from './NavBar'




function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Root />}>
        <Route index element={<Home />} />
        <Route path='/contact' element={<Contact />} loader={dataLoader} />
        <Route path='/menu' element={<Menu />} />
      </Route>
    )
  )

  
  return (
    <div className="App">
      <h1>Hello react</h1>
      <RouterProvider router={router} />
    </div>
  )
}

const Root = () => {
  return (
    <>
      <div>
        <Link to="/"> Home </Link>
        <Link to="/menu"> Menu </Link>
        <Link to="/contact"> Contact </Link>
        
      </div>
      <div>
        <Outlet />
      </div>
    </>
  )
}




export default App
