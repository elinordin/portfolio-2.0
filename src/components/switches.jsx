import React from 'react';
import Switch from './switch'

function Switches(props) {
    return (
        <div className='switches-container'>
            <Switch type='music' music={props.music} toggleSwitch={props.toggleSwitch}/>
            <Switch type='theme' theme={props.theme} toggleSwitch={props.toggleSwitch}/>
        </div>
    );
}

export default Switches;