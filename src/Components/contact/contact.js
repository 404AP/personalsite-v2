import React from 'react'
import { useForm } from "react-hook-form";
import './Contact.css'

export default function Contact() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
  
    //console.log(watch("example")); // watch input value by passing the name of it
  return (
    <div className="contact-container">
    <h1 className="contact-header">Contact</h1>
        <form onSubmit={handleSubmit(onSubmit)}>

        {/* register your input into the hook by invoking the "register" function */}
        <input  placeholder='Your Name' className='name-input' id='name' {...register("Name" , { required: true })} />
        <input  type='email' placeholder='Your Email' className='email-input' id='email' {...register("Email" , { required: true })} />
        <label htmlFor="contact-dropdown">I would like to talk more about :</label>
        <select {...register("reason" , { required: true })}>
            <option value="website">Building a Website/ Web App</option>
            <option value="cosnulting">Consulting </option>
            <option value="job">A Job Offer </option>
        </select>
        
        {errors.exampleRequired && <span>This field is required</span>}
        
        <input type="submit" />
        </form>
    
    </div>
  )
}
