import React from 'react'
import './Contact.css'
import message_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {

    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "7e9cb3e8-0193-44f0-9aa5-99d7e5115c63");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us a message <img src={message_icon} alt="" /></h3>
            <p>Thank you for your interest in BrightHorizon Solutions. Please feel free to reach out to 
                us with any inquiries, questions,
                 or project ideas. Our team is here to assist you and provide the information you need
            </p>

            <ul>
                <li>
                    <img src={mail_icon} alt="" />Shodress1@gmai.com
                </li>
                <li>
                    <img src={phone_icon} alt="" />000 000 0000
                </li>
                <li>
                <img src={location_icon} alt="" />123 Main Street
                </li>
            </ul>

             
        </div>

        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label>Your name</label>
                <input type="text"  name='name' placeholder='Enter your name'/>
                <label>Phone number</label>
                <input type="tel"  name='phone' placeholder='Enter your mobile number' required/>
                <label>Your message</label>
                <textarea name="message" required rows="6" placeholder='Enter your message'></textarea>
                <button type='submit' value="submit" className='btn dark-btn'>submit <img src={white_arrow} alt="" /></button>
            </form>
            <span>{result}</span>
        </div>
      
    </div>
  )
}

export default Contact
