import React from 'react';

import brain from '../assets/graphics/brain.png'

function Brain(props) {
    return (
        <div className={'brain-wrapper' + ' ' + 'brain' + '-' + props.position}>
          <img className='brain-img' alt='brain with a black and white left side and colorful creative right side' src={brain}/>
          <div className='brain-shadow'/>
        </div>
    );
}

export default Brain;