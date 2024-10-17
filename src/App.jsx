import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Header from './components/header'
import Description from './components/description'
import Project from './components/projects'
import Skills from './components/skills'
function App() {

  return (
    <>
     
    {/* <h1>satish</h1> */}
    <Header></Header>
    <Description></Description>
    <Project></Project>
    <Skills></Skills>

    </>
  )
}

export default App
