import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

import Header from '../components/header.jsx'
import Brain from '../components/brain.jsx'
import NavigationArrows from '../components/navigationArrows.jsx'
import Portfolio from '../components/portfolio.jsx'
import About from '../components/about.jsx'

import useSound from 'use-sound';

import song from '../assets/music/background-sound.mp3'


function App() {
  let lightmode = window.matchMedia('(prefers-color-scheme: light)').matches;

  const [theme, setTheme] = useState(lightmode ? 'light' : 'dark')
  const [music, setMusic] = useState('off')
  const [position, setPosition] = useState('center')
  const [play, { pause }] = useSound(song, { volume: 0.1, loop: true });

  const toggleSwitch = (switchType) => {
    if (switchType === 'theme') {
      if (theme === 'light') { setTheme('dark') }
      else if (theme === 'dark') { setTheme('light') }
    }
    else if (switchType === 'music') {
      if (music === 'on') {
        pause()
        setMusic('off')
      }
      else if (music === 'off') {
        play()
        setMusic('on')
      }
    }
  }

  const navigate = (direction) => {
    setPosition(direction)
  }


  return (
    <Router>
      <div id='app' className={`${theme} ${position}`}>
        
        <Header position={position} theme={theme} music={music} toggleSwitch={toggleSwitch} navigate={navigate} />
        
        <main>
          <Brain position={position} navigate={navigate} />
          
          <Switch>
            <Route path="/"><NavigationArrows navigate={navigate} /></Route>
            <Route path="/projects"><Portfolio /></Route>
            <Route path="/about"><About /></Route>
          </Switch>
        </main>
      </div>
    </Router>
  );


}

export default App;
