import React, { Component } from 'react'
import reactlogo from '../../assets/reactlogo.png' 
import api from '../../assets/api.png'
import frontend from '../../assets/frontend.png'
import backend from '../../assets/backend.png'
import javascript from '../../assets/javascript.png' 
import './skill.css'

export class Skill extends Component {
  render() {
    return (
      <section id="skills">
        <span className="skillTitle">What I do</span>
        <span className="skillDesc">I am a skilled and passionate web designer.I create and develop full-stack web applications, focusing on dynamic interfaces, robust backend systems, API integration, and responsive design, showcased through diverse projects in my portfolio.
</span>
        <div className="skillBars">
        <div className="skillBar">
            <img src={javascript} alt="" className="skillBarImg" />
            <div className="skillBarText">
                <h2>JavaScript Programming</h2>
                <p>Skilled in writing clean, efficient JavaScript code, with expertise in ES6+ features and asynchronous programming</p>
            </div>
        </div>

        <div className="skillBar">
            <img src={reactlogo} alt="" className="skillBarImg" />
            <div className="skillBarText">
                <h2>React.js Development</h2>
                <p>Experienced in building dynamic and responsive user interfaces with React.js, utilizing component-based architecture and state management</p>
            </div>
        </div>
        <div className="skillBar">
            <img src={api} alt="" className="skillBarImg" />
            <div className="skillBarText">
                <h2>API Development</h2>
                <p>Proficient in designing and implementing secure and scalable RESTful APIs</p>
            </div>
        </div>
       
        <div className="skillBar">
            <img src={frontend} alt="" className="skillBarImg" />
            <div className="skillBarText">
                <h2>Frontend Development</h2>
                <p>Competent in creating responsive, user-friendly interfaces using HTML, CSS, JavaScript, and modern frontend frameworks</p>
            </div>
        </div>
       
        <div className="skillBar">
            <img src={backend} alt="" className="skillBarImg" />
            <div className="skillBarText">
                <h2>Backend Development</h2>
                <p> Proficient in server-side logic development using PHP, Laravel, and Node.js, with strong database management and API integration skills</p>
            </div>
        </div>

        </div>
        
      </section>
    )
  }
}

export default Skill