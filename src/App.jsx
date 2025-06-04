import { useEffect, useState } from 'react'
import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Produit from './Pages/Produits'
import Error from './Pages/Error'
import Detail from './Pages/Details'



function App() {
  
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/produits' element={<Produit/>}/>
        <Route path='*' element={<Error/>}/>
        <Route path="/detail/:id" element={<Detail />} />
      

      </Routes>
    </>
  )
}

export default App
