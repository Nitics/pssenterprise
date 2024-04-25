import React from 'react'
import user_4 from '../../assets/clean03.jpg'
import './Team.css'

import team01 from '../../assets/team-04.png'
import team02 from '../../assets/team-02.jpg'
import team03 from '../../assets/team-03.png'
import team04 from '../../assets/servicesec.jpg'




const teamMembers = [
    {
        imgUrl: team01,
        name: 'Sena Zungu',
        position: 'CEO'
    },

    {
        imgUrl: team02,
        name: 'Nico Shodress',
        position: 'Product Designer'
    },

    {
        imgUrl: team03,
        name: 'Sena Zungu',
        position: 'Customer Service'
    },

    {
        imgUrl: team04,
        name: 'Sena Zungu',
        position: 'Project Leader'
    },
]




const Team = () => {
    return (
        <section className='our__team'>
            <div className='container'>
                <div className='team__content'>
                   
                </div>
                <div className='team__wrapper'>
                    {
                        teamMembers.map((item, index) => (
                            <div className='team__item' key={index}>
                                <div className='team__img'>
                                    <img src={item.imgUrl} alt='' />
                                </div>
                                <div className='team__details'>
                                    <h4>{item.name}</h4>
                                    <p className='description'>{item.position}</p>

                                    <div className='team__member-social'>
                                        <span><i className='ri-linkedin-line'></i></span>
                                        <span><i class='ri-twitter-line'></i></span>
                                        <span><i class='ri-facebook-line'></i></span>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Team
