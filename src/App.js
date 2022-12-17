import React from 'react'
import "./Css/index.css"
import Header from './components/header'
import Home from './components/Home'
import { Routes,Route} from "react-router-dom";
import About, { Education, Interest, Internship, POR, Skills } from './components/About';
import { MyWork } from './components/MyWork';
import Resume from './components/Resume';
import Source from './components/Source';
const App = () => {
    
  return (
    <>
    <Header/>
    <Routes>
      <Route exect path='/' element={<Home/>}/>
      <Route exect path='/about' element={<About/>}>
        <Route path='/about/interest' element={<Interest/>}/>
        <Route path='/about/education' element={<Education/>}/>
        <Route path='/about/internship' element={<Internship/>}/>
        <Route path='/about/skills' element={<Skills/>}/>
        <Route path='/about/por' element={<POR/>}/>
      </Route>
      <Route exect path='/mywork' element={<MyWork/>}/>
      <Route exect path='/contect' element={<Resume/>}/>
      <Route exect path='/source' element={<Source/>}/>
    </Routes>
    
    </>
  )
}

export default App