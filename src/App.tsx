import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import ThreeTest from './ThreeTest'
import ThreeSlider from './ThreeSlider'
import './app.scss'

const App: React.FC = () => {
   return (
      <BrowserRouter>
         <Routes>
            <Route index element={<Home />} />
            <Route path='ThreeTest' element={<ThreeTest />} />
            <Route path='ThreeSlider' element={<ThreeSlider />} />
         </Routes>
      </BrowserRouter>
   )
}

export default App
