import './App.css'
import Axios from 'axios'
import { useEffect, useState, createContext } from 'react'
import {createBrowserRouter, createRoutesFromElements, Route, Link, Outlet, RouterProvider} from 'react-router-dom' 
import { Home } from './pages/Home'
import { Menu } from './pages/Menu'
import { Contact, dataLoader } from './pages/Contact'
import { Profile } from './pages/Profile'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"


export const AppContext = createContext()

function App() {
  const [username, setUsername] = useState("MattTech")
  const client = new QueryClient({defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }})

  const router = createBrowserRouter(
    createRoutesFromElements(
      
      <Route path='/' element={<Root />}>
        <Route index element={<Home />} />
        <Route path='/contact' element={<Contact />} loader={dataLoader} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='*' element={<h1>PAGE NOT FOUND!!!</h1>} />
      </Route>
      
    )
  )

  
  return (
    <div className="App">
      <h1>Hello react</h1>
      <QueryClientProvider client={client}>
        <AppContext.Provider value={{username, setUsername}}>
          <RouterProvider router={router} />
        </AppContext.Provider>
      </QueryClientProvider>
      
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
        <Link to="/profile"> Profile </Link>
        
      </div>
      <div>
        <Outlet />
      </div>
    </>
  )
}

export default App

const TopComponent = () => {
  const state = 'test for echo'

  return (
    <>
      <MiddleComponent state={state} />
    </>
  )

}

const MiddleComponent = (state) => {

  return (
    <>
      <BottomComponent state={state} />
    </>
  )

}

const BottomComponent = (state) => {

  console.log(state)

  return (
    <div>
      {state}
    </div>
  )

}
