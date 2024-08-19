import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import instalogo from '../../assets/instalogo.png'
import gitlogo from '../../assets/gitlogo.png'
import linkedinlogo from '../../assets/linkedinlogo.png'
import './contact.css'

function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_13vqhzd', 'template_5thq9ch', form.current, '7CwiVp3-P2DXbP7u7')
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
                    Connect with Me for Innovative Solutions
                </div>
                <form ref={form} action="" className="contactForm" onSubmit={sendEmail}>
                    <input type="text" name="your_name" className="name" placeholder='your Name' />
                    <input type="email" name="your_email" className="email" placeholder='Your email' />
                    <textarea name="message" className="msg" placeholder="Your Message" rows="5"></textarea>
                    <button className="submit" value="send" type='submit'>Submit</button>
                    <div className="links">
                        <a href='https://www.instagram.com/_ahmad_kamran/'><img src={instalogo} alt="" className="link" /></a>
                        <a href='https://www.linkedin.com/in/ahmadkamran2/'><img src={linkedinlogo} alt="" className="link" /></a>
                        <a href='https://github.com/kamran-2'><img src={gitlogo} alt="" className="link" /></a>
                    </div>
                </form>


            </div>
        </section>
    );

}

export default Contact
