import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Blogs from './pages/Blogs'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/blog/' element={<Blogs/>}/>
    </Routes>
  )
}

export default App
