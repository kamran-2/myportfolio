import React, { useState } from 'react'
import './navbar.css';
import logo from '../../assets/mylogo.png'
import contactlogo from '../../assets/contactlogo.png'
import menulogo from '../../assets/menulogo.png'
import {Link} from 'react-scroll'
function Navbar(){
 
      const [showMenu,setShowMenu] = useState(false);
           
    return (
           <nav className="navbar">
            <img src={logo} alt="" className='logo'/>
            <div className="desktopMenu">
                <Link activeClass='active' to='intro' spy={true} smooth={true} duration={500} offset={-100} className="desktopMenuItem">Home</Link>
                <Link activeClass='active' spy={true} smooth={true} offset={-100} duration={500} to='skills'className="desktopMenuItem">About</Link>
                <Link activeClass='active' spy={true} smooth={true} offset={-100} duration={500} to='work'className="desktopMenuItem">Portfolio</Link>
            </div>
            <button className="desktopMenuButton" onClick={()=>
            document.getElementById('contactPage').scrollIntoView({behavior:'smooth'})}>
                <img src={contactlogo} alt="" className="desktopMenuImg" /> Contact Me
            </button>
         
            <img src={menulogo} alt="" className='mobMenu' onClick={()=>setShowMenu(!showMenu)}/>
            <div className="navMenu" style={{display:showMenu? 'flex':'none'}}>
                <Link activeClass='active' to='intro' spy={true} smooth={true} duration={500} offset={-100} className="mobMenuItem" onClick={()=>setShowMenu(false)}>Home</Link>
                <Link activeClass='active' spy={true} smooth={true} offset={-100} duration={500} to='skills'className="mobMenuItem" onClick={()=>setShowMenu(false)}>About</Link>
                <Link activeClass='active' spy={true} smooth={true} offset={-100} duration={500} to='work'className="mobMenuItem" onClick={()=>setShowMenu(false)}>Portfolio</Link>
                <Link activeClass='active' spy={true} smooth={true} offset={-100} duration={500} to='contactPage'className="mobMenuItem" onClick={()=>setShowMenu(false)}>Contact me</Link>
            </div>
           </nav>
        );
  }


export default Navbar