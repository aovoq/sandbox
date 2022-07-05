import react from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import ThreeSlider from './ThreeSlider'
import './app.scss'

const App = () => {
   return (
      <BrowserRouter>
         <Routes>
            <Route index element={<Home />} />
            <Route path='threeslider' element={<ThreeSlider />} />
         </Routes>
      </BrowserRouter>
   )
}

export default App
