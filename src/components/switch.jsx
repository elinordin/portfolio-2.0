import React, {useState} from 'react';

import bulbOff from '../assets/icons/bulb-off.svg';
import bulbOn from '../assets/icons/bulb-on.svg';
import musicOff from '../assets/icons/music-off.svg';
import musicOn from '../assets/icons/music-on.svg';

function Switch(props) {
    const [isSwitchOn, setIsSwitchOn] = useState(true)

    const toggleSwitch = () => {
        setIsSwitchOn(!isSwitchOn)
    }

    return (
        <div className={isSwitchOn? 'switch-background switch-on' : 'switch-background switch-off'} onClick={() => {toggleSwitch()}}>
            {props.type === 'music' && <p>{isSwitchOn? 'ON' : 'OFF'}</p>}
            {props.type === 'bulb' && <p>{isSwitchOn? 'LIGHT' : 'DARK'}</p>}
            {props.type === 'music' && <img alt='music icon' src={isSwitchOn? musicOn : musicOff}/>}
            {props.type === 'bulb' && <img alt='lightbulb icon' src={isSwitchOn? bulbOn: bulbOff}/>}
        </div>
    );
}

export default Switch;