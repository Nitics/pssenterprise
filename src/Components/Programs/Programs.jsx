import React from 'react'
import './Programs.css'
import program_1 from '../../assets/clean03.jpg'
import program_2 from '../../assets/servicesec.jpg'
import program_3 from '../../assets/servicecat.jpg'
import program_icon_1 from '../../assets/icons-click.png'
import program_icon_2 from '../../assets/icons-click.png'
import program_icon_3 from '../../assets/icons-click.png'

const Programs = () => {
  return (
    <div className='programs'>
      

        <div className="program">
        <img src={program_1} alt="" /> 
        <div className="caption">
        <img src={program_icon_1} alt="" /> 
        <p>Deap cleaning</p>
       
        </div>
        </div>

        <div className="program">
        <img src={program_2} alt="" /> 

        <div className="caption">
        <img src={program_icon_2} alt="" /> 
        <p>Security Service</p>
        </div>
        </div>

        <div className="program">
        <img src={program_3} alt="" /> 
        <div className="caption">
        <img src={program_icon_3} alt="" /> 
        <p>Catering</p>
        </div>
        </div>

       
      
    </div>
  )
}

export default Programs
