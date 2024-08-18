import open1 from '../../assets/open1.png'
import './work.css'
import port1 from '../../assets/hostel/hostel1.png'
import devdash1 from '../../assets/devdash/devdash1.png'
import datavis from '../../assets/datavis/datavis.jpg'

function Work() {

    return (
      <section id="work">
          <h2 className="worktitle">My Portfolio</h2>
          <span className="workDesc">Explore my portfolio to see diverse projects showcasing my full-stack development skills, including dynamic interfaces, robust backend systems, seamless APIs, and responsive web applications</span>
          <div className="workImgs">
            <div class="overslay">
              <img  src={port1} alt="" className="workImg" />
            <div class="overslaydiv">
              <div className='workicon'>
                <img src={open1} alt="" />
              </div>
              <div>
                <h1>Digital hostel</h1>
              </div>
            </div>
            </div>
            <div class="overslay">
              <img  src={devdash1} alt="" className="workImg" />
            <div class="overslaydiv">
              <div className='workicon'>
                <img src={open1} alt="" />
              </div>
              <div>
                <h1>Devdash</h1>
              </div>
            </div>
            </div>
            <div class="overslay">
              <img  src={datavis} alt="" className="workImg" />
            <div class="overslaydiv">
              <div className='workicon'>
                <img src={open1} alt="" />
              </div>
              <div>
                <h1>Data visulization</h1>
              </div>
            </div>
            </div>
           
          
           
          </div>
          <button className="workbtn">See More</button>
      </section>
    )
  }


export default Work