import React, {useState} from 'react';

import Switches from '../components/switches.jsx'
import Brain from '../components/brain.jsx'
import NavigationArrows from '../components/navigationArrows.jsx'


function App() {
  const [theme, setTheme] = useState('light')
  const [music, setMusic] = useState('off')
  const [position, setPosition] = useState('center')


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
  

  return (
    <div id="app" className={theme + ' ' + position}>
      <header className="App-header">
        <div>
          <h1>Elin Nordin</h1>
          <h2>frontend developer</h2>
        </div>
        <Switches theme={theme} music={music} toggleSwitch={toggleSwitch}/>
      </header>

      <main>
        <Brain/>
        {position === 'center' && <NavigationArrows/>}
      </main>
    </div>
  );
  
  
}

export default App;
