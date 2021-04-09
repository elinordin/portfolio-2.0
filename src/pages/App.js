import React, {useState} from 'react';

import Header from '../components/header.jsx'
import Brain from '../components/brain.jsx'
import NavigationArrows from '../components/navigationArrows.jsx'
import Portfolio from '../components/portfolio.jsx'
import About from '../components/about.jsx'


function App() {
  const [theme, setTheme] = useState('light')
  const [music, setMusic] = useState('off')
  const [position, setPosition] = useState('right')

  const toggleSwitch = (switchType) => {
    if (switchType === 'theme'){
      if (theme === 'light') {setTheme('dark')}
      else if (theme === 'dark') {setTheme('light')}
    }
    else if (switchType === 'music'){
      if (music === 'on') {setMusic('off')}
      else if (music === 'off') {setMusic('on')}
    }
  }

  const navigate = (direction) => {
    setPosition(direction)
  }
  

  return (
    <div id="app" className={theme + ' ' + position}>
      <Header position={position} theme={theme} music={music} toggleSwitch={toggleSwitch}/>

      <main>
        <Brain position={position} navigate={navigate}/>
        {position === 'center' && <NavigationArrows navigate={navigate}/>}
        {position === 'left' && <Portfolio/>}
        {position === 'right' && <About/>}
      </main>
    </div>
  );
  
  
}

export default App;
