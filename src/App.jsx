import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import About from './Pages/About'
import Home from './Pages/home'
import { Route, Routes } from 'react-router-dom'
import Toolbar from './components/Navigation/Toolbar'
import PageNotFound from './Pages/PageNotFound'
import CardDetails from './Pages/CardDetails'

function App() {

  return (
    <>
    <Toolbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/card/:id' element={<CardDetails/>}/>
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
      
    </>
  )
}

export default App
