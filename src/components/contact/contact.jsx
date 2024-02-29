import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import instalogo from '../../assets/instalogo.png'
import gitlogo from '../../assets/gitlogo.png'
import linkedinlogo from '../../assets/linkedinlogo.png'
import './contact.css'

function Contact(){
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_69pif56', 'template_q3m8k5f', form.current, 'oQdu9sD-xqvj9LYrg')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

   
    return (
        <section id="contactPage">
            <div className="contact">
                <h2 className="contactTitle">
                    Contact Me
                </h2>
                <div className="contactDesc">
                 sit amet consectetur adipisicing elit.Nemo obcaecati expedita quod fugiat culpa cumque prov
                </div>
                <form ref={form} action="" className="contactForm" onSubmit={sendEmail}>
                    <input type="text" name="your_name" className="name" placeholder='your Name'/>
                    <input type="email" name="your_email" className="email" placeholder='Your email' />
                    <textarea name="message"  className="msg"  placeholder="Your Message" rows="5"></textarea>
                    <button className="submit" value="send" type='submit'>Submit</button>
                    <div className="links">
                        <img src={instalogo} alt="" className="link" />
                        <img src={linkedinlogo} alt="" className="link" />
                        <img src={gitlogo} alt="" className="link" />
                      
                    </div>
                </form>

                
            </div>
        </section>
    );
  
}

export default Contact
