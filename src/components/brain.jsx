import React from 'react';

import brain from '../assets/graphics/brain.png'

function Brain(props) {
    
    return (
        <button 
            className={'brain-wrapper' + ' ' + 'brain' + '-' + props.position}
            type='button' 
            aria-label={props.position === 'center'? 'wrapping img and shadow' : 'navigate to homescreen'} 
            aria-disabled={props.position === 'center'? true : false}
            //onMouseEnter={() => props.navigate('center')} 
            onClick={() => props.navigate('center')}
        >
            <img className='brain-img' alt='brain with a black and white left side and colorful creative right side' src={brain}/>
            <div className='brain-shadow'/>
        </button>
    );
}

export default Brain;