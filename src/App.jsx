import { useState } from 'react'
import reactLogo from './assets/react.svg'
import HeaderApp from './components/header'
import './App.css'
import HeroApp from './components/hero'
import AboutApp from './components/about'
import CoreApp from './components/core-value'
import DesignerStoryApp from './components/designer-story'
import FooterApp from './components/footer'
import TeamApp from './components/team'



function App() {


  return (
    <main>
      <div>
        <HeaderApp />
      </div>

      <div>
        <HeroApp />
      </div>

      <div>
        <AboutApp />
      </div>
      
      <div>
        <CoreApp />
      </div>

      <div>
        <DesignerStoryApp />
      </div>
      
      <div>
        <TeamApp />
      </div>

      <div>
        <FooterApp />
      </div>

     
    </main>
  )
}

export default App
