import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home.jsx'
import Blogs from './pages/Blogs.jsx'


const App = () => {
  return (
    <>
    <Routes>
      <Route  path='/' element= {<Home/>} />
      <Route path='/blogs' element= {<Blogs/>}/> 
    </Routes>
    </>
  )
}

export default App
