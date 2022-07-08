import React from 'react'
import { useForm } from "react-hook-form";
import './Contact.css'
import worldIMG from '../../Assets/world.png'


export default function Contact() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
  
    //console.log(watch("example")); // watch input value by passing the name of it
  return (
    <div className="contact-container">
    <h1 className="contact-header">Contact</h1>
      <div className="contact-content-container">
        <div className="contact-left">
          <div className='contact-form-container'>
              <form onSubmit={handleSubmit(onSubmit)}>

              <div className="contact-form-top">

              {/* register your input into the hook by invoking the "register" function */}
                <label htmlFor="name" className="contact-name-label"> Name:</label>
                <br />
                <input   className='name-input' id='name' {...register("Name" , { required: true })} />
                <br />
                <label htmlFor="email" className="contact-email-label"> Email:</label>
                <br />
                <input  type='email' className='email-input' id='email' {...register("Email" , { required: true })} />
                <br />
                <label htmlFor="contact-dropdown">I would like to talk more about :</label>
                <br />
                <fieldset className="contact-radio-buttons" id='options' {...register("reason" , { required: true })}>
                  <input type="radio" className="option-1" value='website' name='options'/>
                  <label htmlFor="website" className="contact-option-label">Building a Website/ Web App</label>
                  <br />
                  <input type="radio" className="option-2" value="consulting" name='options'/>
                  <label htmlFor="consulting" className="contact-option-label">Consulting</label>
                  <br />
                  <input type="radio" className="option-3" value="job" name='options'/>
                  <label htmlFor="job" className="contact-option-label">A Job Offer </label>
                </fieldset>
                {errors.exampleRequired && <span>This field is required</span>}
              </div>  
              <div className="contact-form-bottom"> 
                <input type="submit" />
              </div>
              </form>
          </div>
        </div>
        <div className="contact-right">
          <img src={worldIMG} alt="" className="contact-img" />
        </div>
      </div>    
    </div>
  )
}
