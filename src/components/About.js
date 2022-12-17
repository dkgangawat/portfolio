import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import "../Css/about.css"
import Photo from "../images/photo.png"
const About = () => {
   const links = document.getElementsByTagName('a');
   for (var i = 0; i < links.length; i++) {
      links[i].addEventListener("click", function () {
         var current = document.getElementsByClassName("active");
         current[0].className = current[0].className.replace(" active", "");
         this.className += " active";
      });
   }
   console.log(links);
   return (
      <>
         <section >
            <div className='about'>
               <div className='about-menu'>
                  <img src={Photo} alt="" />
                  <div>
                     <NavLink to="/about/interest">Area of Interest</NavLink>
                     <NavLink to="/about/education">Education Details</NavLink>
                     <NavLink to="/about/internship">Internship Details</NavLink>
                     <NavLink to="/about/skills">Skills</NavLink>
                     <NavLink to="/about/por">POR & Extra Curriculars</NavLink>
                  </div>
               </div>
               <div className='about-tabs'>
                  <Outlet />
               </div>
            </div>

         </section>
      </>
   )
}
const Interest = () => {
   return (
      <><div className='about-tab-content'>
         <h1>Area of interest
         </h1>
         <ul>
            <li> Web Development Frontend and Backend</li>
            <li>Data Structures and Algorithms</li>
            <li>python</li>
            <li>machine learinig</li>
         </ul>
      </div>

      </>
   )
}
const Education = () => {
   return (
      <>
         <div className='about-tab-content'>
            <h1>Education details</h1>
            <table>
               <tr>
                  <th>Year of passing</th>
                  <th>Degree/Examination</th>
                  <th>Institution/Board</th>
                  <th>CGPA/Percentage</th>
               </tr>
               <tr>
                  <td>2020</td>
                  <td>cbse</td>
                  <td>JNV Bundi</td>
                  <td>**</td>
               </tr>
            </table>
         </div>

      </>
   )
}
const Internship = () => {
   return (
      <>

         <div className='about-tab-content'>
            <h1>Internships</h1>
            <table>
               <tr>
                  <th>Company Name</th>
                  <th>Position </th>
                  <th>Job descripstion</th>
                  <th>Time line</th>
               </tr>
            </table>
         </div>

      </>
   )
}
const Skills = () => {
   return (
      <>
         <div className='about-tab-content'>
            <h1>Skills</h1>

            <h3>Computer languages: </h3>
            <p>c++,JavaScript, HTML, CSS</p>
            <h3>Software Packages: </h3>
            <p>Node.js, react js framework, express js, Git , mongoDB,next js</p>
            <h3>Languages Known: </h3>
            <p> Hindi, English</p>
         </div>

      </>
   )
}
const POR = () => {
   return (
      <>
         <div className='about-tab-content'>
            <h1>Positions of Responsibility & Extra Curriculars</h1>
         </div>

      </>
   )
}



export default About
export { Interest, Education, Internship, Skills, POR }