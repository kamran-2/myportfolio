import React, { Component } from 'react'
import './work.css'
import port1 from '../../assets/port1.avif'

export class Work extends Component {
  render() {
    return (
      <section id="work">
          <h2 className="worktitle">My Portfolio</h2>
          <span className="workDesc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla labore quaerat, eligendi accusamus ex quam debitis commodi hic. Quas, veniam? Quibusdam voluptatibus quo ea quidem dignissimos vel provident ad quaerat?</span>
          <div className="workImgs">
            <img src={port1} alt="" className="workImg" />
            <img src={port1} alt="" className="workImg" />
            <img src={port1} alt="" className="workImg" />
            <img src={port1} alt="" className="workImg" />
            <img src={port1} alt="" className="workImg" />
            <img src={port1} alt="" className="workImg" />
          </div>
          <button className="workbtn">See More</button>
      </section>
    )
  }
}

export default Work