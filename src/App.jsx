import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom"
import Landing from './components/Landing'
import Store from './components/Store'
import Cart from './components/Cart'
import Hats from './components/Hats'
import Shirts from './components/Shirts'
import Shoes from './components/Shoes'









function App() {


  return (
    <Router>
      <Routes>
        <Route path='/' Component={Landing}></Route>
        <Route path='store' Component={Store}> 
        <Route path='hats' Component={Hats}></Route>
        <Route path='shirts' Component={Shirts}></Route>
        <Route path='shoes' Component={Shoes}></Route>
        </Route>
        <Route path='cart' Component={Cart}></Route>
      </Routes>
    </Router>
  )
}

export default App
