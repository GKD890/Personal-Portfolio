import { useRef, useState } from 'react'

import './App.scss'
import { INav } from './components/navbar'
import { Bio } from './components/bio'
import { SkillDeck } from './components/skill'
import { Footer } from './components/footer'
import { ProjectDeck } from './components/project'
import bioImage from "./assets/971.jpg"


function App() {

  return (
    <div className="App vh-100">
      <INav  />
      <Bio avatar={bioImage}  />
      <SkillDeck  />
      <ProjectDeck  />
      <Footer />
    </div>
  )
}

export default App
