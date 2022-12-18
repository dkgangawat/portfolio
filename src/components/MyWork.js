import React from "react";
import { NavLink } from "react-router-dom";
import Mywork from "../API/Mywork";
import "../Css/mywork.css";
export const MyWork = () => {
  const frontend = Mywork[0].frontend
  const projects = Mywork[0].projects
  const mIn = (index)=>{
   const btn = document.getElementById(`btn-${index}`)
   btn.style.height="100%"
  }
  const mOut = (index)=>{
    const btn = document.getElementById(`btn-${index}`)
    btn.style.height="0"
   }
  return (
    <>
        <section className="mywork">
          <h1>Frontend projects</h1>
          {frontend.map((curr, index) => {
            return (
              
                <div className='p-card' key={index} onMouseEnter={()=>{mIn(index)}} >
                  <img src={curr.img} alt="" />
                    <h3>{curr.project_name}</h3>
                    <a href={curr.git_hub_link} id={`btn-${index}`} onMouseOut={()=>{mOut(index)}} className="p-view">view</a>
                    <a href={curr.git_hub_link} style={{position:"absolute",height:"100%",width:"100%",zIndex:"3",background:"trasparent"}}></a>
                </div>
            );
          })}
          {/* <h1>fullstack</h1> */}
          <h1>Projects</h1>
          {projects.map((curr, index) => {
            return (
                <div className='p-card' key={index} onMouseEnter={()=>{mIn(index)}} >
                  <img src={curr.img} alt="" />
                    <h3>{curr.project_name}</h3>
                    <a href={curr.git_hub_link} id={`btn-${index}`} onMouseOut={()=>{mOut(index)}} className="p-view">view</a>
                    <a href={curr.git_hub_link} style={{position:"absolute",height:"100%",width:"100%",zIndex:"3",background:"trasparent"}}></a>

                </div>
            );
          })}
        </section>
    </>
  );
};
