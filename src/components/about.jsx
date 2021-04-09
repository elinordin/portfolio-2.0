import React from 'react';

import mail from '../assets/icons/mail.png'
import github from '../assets/icons/github.png'
import linkedin from '../assets/icons/linkedin.png'
import cv from '../assets/icons/cv.png'

function About() {
    return (
        <section className='about'>
            <div>
                <h1>Hi there, I'm Elin</h1>
                <p>I am a <span>creative problem solver</span> and <span>frontend developer</span>.
                Make yourself at home and if you feel the urge to <span>explore</span> more of
                my <span>brain</span>, <span>heart</span> or <span>soul</span>, reach out on the links below!</p>
            </div>
            <div>
                <a href='mailto:elin.nordin@hyperisland.se' aria-label='Email me'><img src={mail}/></a>
                <a href='https://github.com/elinordin' aria-label='Go to my github'><img src={github}/></a>
                <a href='https://www.linkedin.com/in/elinordin/' aria-label='Go to my linkedin'><img src={linkedin}/></a>
                <a href='' aria-label='Download my CV'><img src={cv}/></a>
            </div>

        </section>
    );
}

export default About;