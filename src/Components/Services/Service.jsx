import React from 'react'
import './Service.css'
import user_4 from '../../assets/clean03.jpg'
import user_2 from '../../assets/clean03.jpg'

const Service = () => {
  return (
    <div className="container-new">
    <h1 className="container-new__heading"></h1>
    <div className="container-new__box">
    
        <div className="box">
            <img src={user_4} alt=""/>
            <h3>Cleaning Services</h3>
            <p>We do proper cleaning </p>
            <a href="" className="btn">Read More</a>
        </div>

        <div className="box">
            <img src={user_2} alt=""/>
            <h3>Security Services</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt, soluta.</p>
            <a href="" className="btn">Read More</a>
        </div>
  
        <div className="box">
            <img src="https://img.freepik.com/free-icon/javascript_318-698169.jpg?size=338&ext=jpg&uid=R95218254&ga=GA1.1.1791957629.1674016057&semt=sph" alt=""/>
            <h3>Catering Services</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt, soluta.</p>
            <a href="" className="btn">Read More</a>
        </div>
 
      

       

    </div>
</div>
  )
}

export default Service
