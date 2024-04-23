import React from 'react'
import './About.css'
import about_img  from '../../assets/clean03.jpg'
import play_icon  from '../../assets/play-icon.png'

const About = () => {
  return (
    <div className='about'>
      <div className="about-left">
            <img src={about_img} alt="" className='about-img'/>
            <img src={play_icon} alt="" className='play-icon'/>
      </div>
      <div className="about-right">
        <h3>About PSS</h3>
        <h2>We provide proper service for all</h2>
        <p>Welcome to BrightHorizon Solutions, where innovation meets excellence. 
            We are a team of passionate professionals dedicated to providing cutting-edge solutions in the field of technology and software development. Our 
            mission is to empower businesses and individuals by leveraging the power of technology to drive growth, efficiency, and success
            </p>
            <p>
            Our mission is to deliver high-quality, innovative, and reliable technology solutions that exceed our clients' expectations.
             By fostering a culture of creativity, collaboration, and excellence, we aim to empower businesses to reach new heights of success.
            </p>

      </div>
    </div>
  )
}

export default About
