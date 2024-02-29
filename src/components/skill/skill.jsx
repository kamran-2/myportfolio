import React, { Component } from 'react'
import pythonlogo from '../../assets/pythonlogo.png' 
import reactlogo from '../../assets/reactlogo.png' 
import javascript from '../../assets/javascript.png' 
// import gitlogo from '../../assets/gitlogo.png' 
import javalogo from '../../assets/javalogo.png' 
import './skill.css'

export class Skill extends Component {
  render() {
    return (
      <section id="skills">
        <span className="skillTitle">What I do</span>
        <span className="skillDesc">I am a skilled and passionate web designer</span>
        <div className="skillBars">

        <div className="skillBar">
            <img src={pythonlogo} alt="" className="skillBarImg" />
            <div className="skillBarText">
                <h2>UI/UX Design</h2>
                <p>This is demo text</p>
            </div>
        </div>
        <div className="skillBar">
            <img src={reactlogo} alt="" className="skillBarImg" />
            <div className="skillBarText">
                <h2>UI/UX Design</h2>
                <p>This is demo text</p>
            </div>
        </div>
        <div className="skillBar">
            <img src={javalogo} alt="" className="skillBarImg" />
            <div className="skillBarText">
                <h2>UI/UX Design</h2>
                <p>This is demo text</p>
            </div>
        </div>
        <div className="skillBar">
            <img src={javascript} alt="" className="skillBarImg" />
            <div className="skillBarText">
                <h2>UI/UX Design</h2>
                <p>This is demo text</p>
            </div>
        </div>

        </div>
        
      </section>
    )
  }
}

export default Skill