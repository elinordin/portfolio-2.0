import React from 'react';
import Switches from '../components/switches.jsx'
import { ReactComponent as ChevronLeft } from '../assets/icons/chevron-left.svg'

function Header(props) {

    return (
        <header className={`${props.position}-header`}>
            <div className='arrow-text-container'>
                {props.position !== 'center' &&
                    <button
                        type='button'
                        aria-label='Go back to start page'
                        className='nav-button to-start-btn'
                        onClick={() => props.navigate('center')}
                    >
                        <ChevronLeft className='arrow' />
                    </button>}

                <div className={props.position === 'right' ? 'slide-out' : undefined}>
                    <h1>Elin Nordin</h1>
                    <h2>frontend developer</h2>
                </div>
            </div>

            <Switches theme={props.theme} music={props.music} toggleSwitch={props.toggleSwitch} />
        </header>
    );
}

export default Header;