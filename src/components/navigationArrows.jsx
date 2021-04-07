import React from 'react';

import {ReactComponent as ChevronLeft} from '../assets/icons/chevron-left.svg'
import {ReactComponent as ChevronRight} from '../assets/icons/chevron-right.svg'

function NavigationArrows() {
    return (
        <div className='nav-arrow-container'>
            <ChevronLeft className='arrow'/>
            <ChevronRight className='arrow'/>
        </div>
    );
}

export default NavigationArrows;