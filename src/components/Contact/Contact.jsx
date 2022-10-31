import React, { useRef } from 'react';
import './contact.css';
import { MdOutlineEmail } from 'react-icons/md'
import {RiMessengerFill } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'
import emailjs from 'emailjs-com'
const Contact = () => {

  const form= useRef();
    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ujpqunn', 'template_af6znu6', form.current, 'E_Ty8n9iM9HP3aC3s')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
          <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>boluwatifeadeyemi1226@gmail.com</h5>
            <a href="malito:boluwatifeadeyemi1226@gmail.com">Send A Message</a>
          </article>
          <article className="contact__option">
          <RiMessengerFill className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Dynamic</h5>
            <a href='https://m.me/damilare.adeyemi5832'>Send A Message</a>
          </article>
          <article className="contact__option">
          <BsWhatsapp className='contact__option-icon' />
            <h4>09016455933</h4>
            <h5>boluwatifeadeyemi1226@gmail.com</h5>
            <a href='https://api.whatsapp.com/send/?phone=+2349016455933'>Send A Message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Your Full Name' required />
          <input type="email" name="email" placeholder='Your Email' required/>
          <textarea name='message' rows={7} placeholder="Your Message" required />
          <button className='btn btn-primary' type="submit">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact