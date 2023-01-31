import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.scss'
import { INav } from './components/navbar'
import { Bio } from './components/bio'
import { Skill } from './components/skills'
import { Footer } from './components/footer'



function App() {

  return (
    <div className="App vh-100">
      {/* <h1>test</h1> */}
      <INav />
      <Bio />
      <Footer />
    </div>
  )
}

export default App
