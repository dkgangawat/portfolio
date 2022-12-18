import React from 'react'
import "../Css/mobile_menu.css"
import { NavLink } from 'react-router-dom';
const Mmenu = () => {

    const handleClick =()=>{
        const accordion = document.getElementById('mobile-menu')
        accordion.classList.toggle('active')
    }
  return (
    <div className='mobile-menu' id='mobile-menu'>
        <div className='A-list' onClick={handleClick} onBlur={handleClick}>
            <p  className='A-title'>More</p>
            <svg className='arrow' id='arrow'fill='white' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <polygon points="12 17.414 3.293 8.707 4.707 7.293 12 14.586 19.293 7.293 20.707 8.707 12 17.414"/>
            </svg>
        </div>
        <div className='content'>
            <div className="mainContent">
            <NavLink to="/about/interest">About</NavLink>
            <NavLink to="/mywork">My work</NavLink>
            <a href="/portfolio/#contect">Contect Me</a>
            {/* <NavLink className="main-btn" to="/Source">Source codes</NavLink> */}
            <a className="main-btn" href="https://github.com/dkgangawat">Source codes</a> 

            </div>
        

        </div>
    </div>
  )
}

export default Mmenu