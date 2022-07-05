import React from 'react'
import { Link } from 'react-router-dom'

const home: React.FC = () => {
   return (
      <>
         <h1>welcome sandbox</h1>
         <nav>
            <ul>
               <li><Link to="ThreeSlider">ThreeSlider</Link></li>
            </ul>
         </nav>
      </>
   )
}

export default home
