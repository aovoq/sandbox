import React, { useEffect, useRef } from 'react'
import { createThreeScene } from './createThreeScene'
import './style.scss'

const ThreeSlider: React.FC = () => {
   const mountRef = useRef<HTMLDivElement>(null)

   useEffect(() => {
      const threeCanvas = createThreeScene(mountRef.current?.clientWidth, mountRef.current?.clientHeight)
      mountRef.current?.appendChild(threeCanvas)
      return () => {
         mountRef.current?.removeChild(threeCanvas)
      }
   }, [])

   return (
      <>
         <div ref={mountRef} className='canvas'>
            <div className='description'>
               <h3>ThreeSlider</h3>
            </div>
         </div>
      </>
   )
}

export default ThreeSlider
