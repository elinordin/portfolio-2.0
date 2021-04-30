import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";

import {ReactComponent as ChevronLeft} from '../assets/icons/chevron-left.svg'
import {ReactComponent as ChevronRight} from '../assets/icons/chevron-right.svg'

function NavigationArrows(props) {

    return (
        <div className='nav-arrow-container'>
            <Link 
            to="/projects"
            type='button' 
            aria-label='Go to portfolio' 
            className='nav-button to-portfolio-btn'
            onMouseEnter={() => props.navigate('left')} 
            onClick={() => props.navigate('left')}
            >
                <ChevronLeft className='arrow left-arrow'/>
            </Link>

            <Link 
            to="/about"
            type='button' 
            aria-label='Go to about me' 
            className='nav-button to-about-btn' 
            onMouseEnter={() => props.navigate('right')} 
            onClick={() => props.navigate('right')}
            >
                <ChevronRight className='arrow right-arrow'/>
            </Link>
        </div>
    );
}

export default NavigationArrows;