import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
        <div className='hero-text'>
            <h1>Welcome to PSS Enterprise</h1>
            <p>Empowering progress, Inspiring innovation</p>
            <button className='btn'> Exlpore More  <img src={dark_arrow} alt="" /> </button>
        </div>
      
    </div>
  )
}

export default Hero
