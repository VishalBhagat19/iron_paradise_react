import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Header from './component/layouts/Header'
import Footer from './component/layouts/Footer'
import Home from './component/Home'
import About from './component/About'
import Class from './component/Class'
import Trainwithus from './component/Trainwithus'
import PageNotFound from './component/PageNotFound'
import Register from './component/Register'
import Gallery from './component/Gallery'
function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/class' element={<Class/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App