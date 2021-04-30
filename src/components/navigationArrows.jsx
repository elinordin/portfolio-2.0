import React from 'react';

import {ReactComponent as ChevronLeft} from '../assets/icons/chevron-left.svg'
import {ReactComponent as ChevronRight} from '../assets/icons/chevron-right.svg'

function NavigationArrows(props) {

    return (
        <div className='nav-arrow-container'>
            <button 
            type='button' 
            aria-label='Go to portfolio' 
            className='nav-button to-portfolio-btn'
            onMouseEnter={() => props.navigate('left')} 
            onClick={() => props.navigate('left')}
            >
                <ChevronLeft className='arrow left-arrow'/>
            </button>

            <button 
            type='button' 
            aria-label='Go to about me' 
            className='nav-button to-about-btn' 
            onMouseEnter={() => props.navigate('right')} 
            onClick={() => props.navigate('right')}
            >
                <ChevronRight className='arrow right-arrow'/>
            </button>
        </div>
    );
}

export default NavigationArrows;