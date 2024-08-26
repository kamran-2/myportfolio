import open1 from '../../assets/open1.png'
import './work.css'

import Dailogbox from './Dailogbox'
import mywork from './mywork'
import { useState} from 'react'
function Work() {
    const [value, setvalue] = useState(false);
    const [position, setPosition] = useState({ top: 0, left: 0 });

    // const [margin, setmargin] = useState(20);
    const [getindex,setindex] = useState(1);
    // const 
    const handleClick = (event,index) =>{
      setvalue(true);
      setindex(index);
      const rect = event.target.getBoundingClientRect(); 
      console.log(rect.top);// Get position of the clicked div
      setPosition({
        top: rect.top - 50, // Adjust to position the div above (50px above the clicked div)
        left: rect.left,
      });
    }
  const style = {
    position: 'absolute',
    top: `${position.top+1200}px`,
    left: `${position.left}px`,
    backgroundColor: 'lightblue',
    width: '80%',
    height: '75%',
    padding: '10px',

    borderRadius: '5px',
    zIndex: 1000,
  }
    return (
      <section id="work">

          <h2 className="worktitle">My Portfolio</h2>
          <span className="workDesc">Explore my portfolio to see diverse projects showcasing my full-stack development skills, including dynamic interfaces, robust backend systems, seamless APIs, and responsive web applications</span>
          <div className="workImgs">
            {
              mywork.map((item,index)=>(
                <div class="overslay">
                  <img src={item.headimg} alt="img" className="workImg" />
                  <div class="overslaydiv">
                    <div className='workicon'>
                      <img src={open1} onClick={(event)=>handleClick(event,index)} alt="img" />
                    </div>
                    <div>
                      <h1>{item.heading}</h1>
                    </div>
                  </div>
                </div>
              ))
            }
            
            
            
           
          
           
          </div>
          <button className="workbtn">See More</button>
        {value && <Dailogbox Style={style} setvalue={setvalue} myindex={getindex} />}

      </section>
    )
  }


export default Work