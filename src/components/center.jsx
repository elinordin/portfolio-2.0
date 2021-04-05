import React from 'react';

import brain from '../assets/graphics/brain.png'
import {ReactComponent as ChevronLeft} from '../assets/icons/chevron-left.svg'
import {ReactComponent as ChevronRight} from '../assets/icons/chevron-right.svg'

function Center() {
    return (
        <div className='center-main-container'>
            <ChevronLeft className='arrow'/>
            <div className='brain-wrapper'>
                <img className='brain-img' alt='brain with a black and white left side and colorful creative right side' src={brain}/>
                <div className='brain-shadow'/>
            </div>
            <ChevronRight className='arrow'/>
        </div>
    );
}

export default Center;