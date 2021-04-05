import React, {useState} from 'react';

import bulbOff from '../assets/icons/bulb-off.svg';
import bulbOn from '../assets/icons/bulb-on.svg';
import musicOff from '../assets/icons/music-off.svg';
import musicOn from '../assets/icons/music-on.svg';

function Switch(props) {

    return (
        <div className={props.theme === 'light' || props.music === 'on' ? 'switch-background switch-on' : 'switch-background switch-off'} onClick={() => props.toggleSwitch(props.type)}>
            {props.type === 'music' && <p>{props.music === 'on'? 'ON' : 'OFF'}</p>}
            {props.type === 'theme' && <p>{props.theme === 'light' ? 'LIGHT' : 'DARK'}</p>}
            {props.type === 'music' && <img alt='music icon' src={props.music === 'on'? musicOn : musicOff}/>}
            {props.type === 'theme' && <img alt='lightbulb icon' src={props.theme === 'light' ? bulbOn: bulbOff}/>}
        </div>
    );
}

export default Switch;