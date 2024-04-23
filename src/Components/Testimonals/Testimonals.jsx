import React, { useRef } from 'react'
import './Testimonals.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/clean03.jpg'
import user_2 from '../../assets/clean03.jpg'
import user_4 from '../../assets/clean03.jpg'
import user_3 from '../../assets/clean03.jpg'

const Testimonals = () => {
    const slider = useRef();
    let tx = 0;
const slideForward = ()=>{
   if(tx > -50)
   {
    tx-=25;
   }
   slider.current.style.transform = `translateX(${tx}%)`

}

const slideBackforward = ()=>{
    if(tx < 0)
    {
     tx+=25;
    }
    slider.current.style.transform = `translateX(${tx}%)`
}


  return (
    <div className='testimonals'>
        <img src={next_icon} alt='' className='next-btn' onClick={slideForward}/>
        <img src={back_icon} alt='' className='back-btn' onClick={slideBackforward}/>
        <div className="slider">
            <ul ref={slider}>
                <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_1} alt="" />
                        <div>
                            <h3>RDBS 1</h3>
                            <span>Centurion, RSA</span>

                        </div>
                    </div>
                    <p>Our team consists of highly skilled and experienced professionals who are passionate about technology and dedicated to excellence. 
                        We believe in the power of collaboration and teamwork, and we work closely with our clients to deliver solutions that drive tangible results.</p>
                </div>
                
                </li>

                <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_2} alt="" />
                        <div>
                            <h3>RDBS 2</h3>
                            <span>Centurion, RSA</span>

                        </div>
                    </div>
                    <p>Our team consists of highly skilled and experienced professionals who are passionate about technology and dedicated to excellence. 
                        We believe in the power of collaboration and teamwork, and we work closely with our clients to deliver solutions that drive tangible results.</p>
                </div>
                
                </li>

                <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_3} alt="" />
                        <div>
                            <h3>RDBS 3</h3>
                            <span>Centurion, RSA</span>

                        </div>
                    </div>
                    <p>Our team consists of highly skilled and experienced professionals who are passionate about technology and dedicated to excellence. 
                        We believe in the power of collaboration and teamwork, and we work closely with our clients to deliver solutions that drive tangible results.</p>
                </div>
                
                </li>

                <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_4} alt="" />
                        <div>
                            <h3>RDBS 4</h3>
                            <span>Centurion, RSA</span>

                        </div>
                    </div>
                    <p>Our team consists of highly skilled and experienced professionals who are passionate about technology and dedicated to excellence. 
                        We believe in the power of collaboration and teamwork, and we work closely with our clients to deliver solutions that drive tangible results.</p>
                </div>
                
                </li>

            </ul>
        </div>
      
    </div>
  )
}

export default Testimonals
