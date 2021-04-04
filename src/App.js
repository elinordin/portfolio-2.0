import React, {useState} from 'react';

function App() {
  const [positionAndMode, setPositionAndMode] = useState({position: 'center', mode: 'dark'})

  return (
    <div className={positionAndMode.mode + '-' + positionAndMode.position}>
      <header className="App-header">
      <h1>my heading</h1>
        <p>Edit and save to reload.</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
  
  
}

export default App;
