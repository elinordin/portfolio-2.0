import React, {useState} from 'react';
import Switches from '../components/switches.jsx'

function App() {
  const [positionAndMode, setPositionAndMode] = useState({position: 'left', mode: 'dark'})

  return (
    <div id="app" className={positionAndMode.mode + '-' + positionAndMode.position}>
      <header className="App-header">
        <h1>Elin Nordin</h1>
        <h2>frontend developer</h2>
        <Switches/>
      </header>

      <main>

      </main>
    </div>
  );
  
  
}

export default App;
