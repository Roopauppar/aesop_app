import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/components/Home'
import Navbar from './pages/components/Navbar'


const App = () => {
  <Navbar />
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
