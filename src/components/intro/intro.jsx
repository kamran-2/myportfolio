import React, { Component } from 'react'
import './intro.css'
import profile from '../../assets/profile3.webp'
import worklogo from '../../assets/worklogo.png'
import Typewriter from 'typewriter-effect'
import { Link } from 'react-scroll'


export class Intro extends Component {
  render() {
    return (
      <section id="intro">
        <div className="introContent">
          <span className="hello">Hello,</span>
          <span className="introText">I'm < span className="introName"><Typewriter
            options={{
              strings: ['Ahmad Kamran'],
              autoStart: true,
              loop: true,
            }} />
          </span></span><span>Website Designer</span>
          <p className="introPara">I am  learning web designer</p>
          <Link><button className="btn"><img className='btnImg' src={worklogo} alt="" />Hire Me</button></Link>
        </div>
        <img src={profile} alt="" className="bg" />
      </section>
    )
  }
}

export default Intro