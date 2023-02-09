import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.scss'
import { INav } from './components/navbar'
import { Bio } from './components/bio'
import { SkillDeck } from './components/skill'
import { Footer } from './components/footer'
import { ProjectDeck } from './components/project'
import bioImage from "./assets/971.jpg"


// function App() {
//   const home = useRef(null);
//   const skill = useRef(null);
//   const project = useRef(null);

//   return (
//     <div className="App vh-100">
//       <INav  />
//       <Bio avatar={bioImage} ref={home} />
//       <SkillDeck ref={skill} />
//       <ProjectDeck ref={project} />
//       <Footer />
//     </div>
//   )
// }
function App() {
  // const home = useRef(null);
  // const skill = useRef(null);
  // const project = useRef(null);

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
