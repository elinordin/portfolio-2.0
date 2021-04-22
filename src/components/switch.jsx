import React, { useState } from 'react';

import bulbOff from '../assets/icons/bulb-off.svg';
import bulbOn from '../assets/icons/bulb-on.svg';
import musicOff from '../assets/icons/music-off.svg';
import musicOn from '../assets/icons/music-on.svg';

function Switch(props) {
    const [isOn, setIsOn] = useState(props.theme === 'light'? true: false)

    const toggle = () => {
        setIsOn(!isOn)
        props.toggleSwitch(props.type)
    }

    return (
        <button type='button' role='switch' className={`${props.type}-btn`} aria-checked={isOn} onClick={() => toggle()}>
            {props.type === 'music' && <span className={`text ${props.type}-switch-text`}>{props.music === 'on'? 'ON' : 'OFF'}</span>}
            {props.type === 'theme' && <span className={`text ${props.type}-switch-text`}>{props.theme === 'light' ? 'LIGHT' : 'DARK'}</span>}
            {props.type === 'music' && <img className={`slider ${props.type}-switch-slider`} alt='music icon' src={props.music === 'on'? musicOn : musicOff}/>}
            {props.type === 'theme' && <img className={`slider ${props.type}-switch-slider`} alt='lightbulb icon' src={props.theme === 'light' ? bulbOn: bulbOff}/>}
        </button>
    );
}

export default Switch;