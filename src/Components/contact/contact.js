import React from 'react'
import Form from './form';

import './Contact.css'
import worldIMG from '../../Assets/world.png'


export default function Contact() {
    
    //console.log(watch("example")); // watch input value by passing the name of it
  return (
    <div className="contact-container" id="contact">
    <h1 className="contact-header">Contact</h1>
      <div className="contact-content-container">
        <div className="contact-left">
          <div className='contact-form-container'>
            <Form/>
          </div>
        </div>
        <div className="contact-right">
          <img src={worldIMG} alt="" className="contact-img" />
        </div>
      </div>    
    </div>
  )
}
