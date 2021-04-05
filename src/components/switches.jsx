import React from 'react';
import Switch from './switch'

function Switches() {
    return (
        <div className='switches-container'>
            <Switch type='music'/>
            <Switch type='bulb'/>
        </div>
    );
}

export default Switches;