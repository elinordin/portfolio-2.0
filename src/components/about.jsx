import React from 'react';

import Blobs from '../components/blobs.jsx'

import mail from '../assets/icons/mail.png'
import github from '../assets/icons/github.png'
import linkedin from '../assets/icons/linkedin.png'
import cv from '../assets/icons/cv.png'

function About() {
    return (
        <section className='about'>
            <div className='text'>
                <h1>Hi there, I'm <span className='slide-in'>Elin Nordin</span></h1>
                <p>I am a <span>creative problem solver</span> and <span className='slide-in'>frontend developer</span>. <br/>
                Make yourself at home and if you feel the urge to <span>explore</span> more of
                my <span>brain</span>, <span>heart</span> or <span>soul</span>, reach out on the links below!</p>

                <a href='mailto:elin.nordin@hyperisland.se' aria-label='Email me'><img alt='Email icon' src={mail}/></a>
                <a href='https://github.com/elinordin' aria-label='Go to my github'><img alt='Github icon' src={github}/></a>
                <a href='https://www.linkedin.com/in/elinordin/' aria-label='Go to my linkedin'><img alt='Linkedin icon' src={linkedin}/></a>
                <a href=' ' download="CV - Elin Nordin" aria-label='Download my CV'><img alt='Documents icon' src={cv}/></a>
            </div>

            <Blobs/>

        </section>
    );
}

export default About;