import React, { useRef } from "react";
import useFormHero from "../../formHero";
import { useForm } from "react-hook-form";

const FORM_ENDPOINT = "https://public.herotofu.com/v1/8808a2f0-018c-11ed-af3d-615a7cafe262"; // TODO - fill on the later step

const Form = () => {
  const formElement = useRef(null);
  const additionalData = {
    sent: new Date().toISOString(),
  };

  const { register, handlingSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => {
      console.log(formElement.elements)
  };

  const { handleSubmit, status, message } = useFormHero({
    form: formElement.current,
    additionalData,
  });

  if (status === "success") {
    return (
      <>
        <div>Thank you!</div>
        <div>{message}</div>
      </>
    );
  }

  if (status === "error") {
    return (
      <>
        <div>Something bad happened!</div>
        <div>{message}</div>
      </>
    );
  }

  return (
    <form
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
      target="_blank"
      ref={formElement}
    >
        <div className="contact-form-top">
            <label htmlFor="name" className="contact-name-label"  > Name:</label>
            <br />
            <input   className='name-input' id='name'   {...register("Name" , { required: true })}/>
            <br />
            <label htmlFor="email" className="contact-email-label" > Email:</label>
            <br />
            <input  type='email' className='email-input' id='email' {...register("Email" , { required: true })}/>
            <br />
            <label htmlFor="options">I would like to talk more about :</label>
            <br />
            <fieldset type="radio" className="contact-radio-buttons" id='options'>
                <input type="radio" className="option-1" value='website' name='options' {...register("reason" , { required: true })}/>
                <label htmlFor="website" className="contact-option-label">Building a Website/ Web App</label>
                <br />
                <input type="radio" className="option-2" value="consulting" name='options' {...register("reason" , { required: true })}/>
                <label htmlFor="consulting" className="contact-option-label">Consulting</label>
                <br />
                <input type="radio" className="option-3" value="job" name='options' {...register("reason" , { required: true })}/>
                <label htmlFor="job" className="contact-option-label">A Job Offer </label>
            </fieldset>
           
            </div>  
            <div className="contact-form-bottom">
            <input type="submit" />
        </div>
    </form>
  );
};

export default Form;