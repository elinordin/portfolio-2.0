import React, { useState } from 'react';

import Header from '../components/header.jsx'
import Brain from '../components/brain.jsx'
import NavigationArrows from '../components/navigationArrows.jsx'
import Portfolio from '../components/portfolio.jsx'
import About from '../components/about.jsx'

import useSound from 'use-sound';

import song from '../assets/music/background-sound.mp3'


function App(props) {
  let lightmode = window.matchMedia('(prefers-color-scheme: light)').matches;

  const [theme, setTheme] = useState(lightmode? 'light': 'dark')
  const [music, setMusic] = useState('off')
  const [position, setPosition] = useState(props.position)
  const [play, { pause }] = useSound(song, {volume: 0.1, loop: true});

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
    direction === 'center' && window.history.replaceState(null, 'Elin Nordin - Frontend Developer', '/')
    direction === 'left' && window.history.replaceState(null, 'Elin Nordin - Portfolio', '/projects')
    direction === 'right' && window.history.replaceState(null, 'Elin Nordin - About me', '/about')
  }


  return (
    <div id='app' className={`${theme} ${position}`}>

      <Header position={position} theme={theme} music={music} toggleSwitch={toggleSwitch} navigate={navigate}/>

      <main>
        <Brain position={position} navigate={navigate} />
        {position === 'center' && <NavigationArrows navigate={navigate} />}
        {position === 'left' && <Portfolio />}
        {position === 'right' && <About />}
      </main>
    </div>
  );


}

export default App;
