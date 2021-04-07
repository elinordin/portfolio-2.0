import React from 'react';

import {ReactComponent as ChevronLeft} from '../assets/icons/chevron-left.svg'
import {ReactComponent as ChevronRight} from '../assets/icons/chevron-right.svg'

function NavigationArrows(props) {


    return (
        <div className='nav-arrow-container'>
            <button 
            type='button' 
            ariaLabel='Go to portfolio' 
            className='nav-button' 
            onMouseEnter={() => props.navigate('left')} 
            onClick={() => props.navigate('left')}
            >
                <ChevronLeft className='arrow'/>
            </button>

            <button 
            type='button' 
            ariaLabel='Go to about me' 
            className='nav-button' 
            onMouseEnter={() => props.navigate('right')} 
            onClick={() => props.navigate('right')}
            >
                <ChevronRight className='arrow'/>
            </button>
        </div>
    );
}

export default NavigationArrows;