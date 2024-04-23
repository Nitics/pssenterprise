import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonals from './Components/Testimonals/Testimonals'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'


const App = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <div className="container">
          <Title subTitle='Our Service' title='Waht we provide'/>
        <Programs/>
        
        <About/>
        <Title subTitle='Gallery' title='Our Clients'/>
        <Campus/>
        <Title subTitle='Testimonals' title='What people say about us'/>
        <Testimonals/>
        <Title subTitle='Contact' title='Talk to us'/>
        <Contact/>
        <Footer/>
        </div>
     
     
    </div>
  )
}

export default App