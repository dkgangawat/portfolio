import React from 'react'
import { NavLink } from 'react-router-dom';
import Mmenu from './mobile_menu';

const Header = () => {
  const links = document.getElementsByTagName('a');
  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
    });
  }
  return (
    <>
    <nav>
        <div className='nav-links'>
            <NavLink to="/portfolio">Home</NavLink>
            <div className='more'>
              <NavLink to="/about/interest">About</NavLink>
            <NavLink to="/mywork">My work</NavLink>
            <a href="/portfolio/#contact">Contact Me</a>
            {/* <NavLink className="main-btn" to="/Source">Source codes</NavLink>  */}
            <a className="main-btn" href="https://github.com/dkgangawat">Source codes</a> 
            </div>
            <Mmenu/>
        </div>
    </nav>
    </>
  )
}
export default Header