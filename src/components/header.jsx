import React from 'react';
import Switches from '../components/switches.jsx'

function Header(props) {

    return (
        <header className="App-header">
            <div className={props.position === 'right'? 'slide-out' : undefined}>
                <h1>Elin Nordin</h1>
                <h2>frontend developer</h2>
            </div>
            <Switches theme={props.theme} music={props.music} toggleSwitch={props.toggleSwitch}/>
        </header>
    );
}

export default Header;