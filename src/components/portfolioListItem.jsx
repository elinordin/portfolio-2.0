import React, { useState } from 'react';
import Piechart from '../components/piechart.jsx'

function PortfolioListItem(props) {
    const [style, setStyle] = useState({opacity: 0})

    const handleClick = () => {
        setStyle(style.opacity === 0 ? {opacity: 1}: {opacity: 0})
    }

    return (
        <li className='box' 
            onMouseEnter={() => setStyle({opacity: 1})} 
            onMouseLeave={() => setStyle({opacity: 0})}
            onFocus={() => setStyle(style.opacity === 0 ? {opacity: 1}: {opacity: 0})}
            onBlur={() => setStyle(style.opacity === 0 ? {opacity: 1}: {opacity: 0})}
            onClick={() => handleClick} 
        >
            <div className='info-wrapper' style={style}>


                <div className='text'>
                    <h3 className='title'>{props.project.title}</h3>
                    <p>{props.project.bullets}</p>
                </div>

                {props.project.title.includes('Github') && <Piechart data={props.stats}/>}
                
                <div className='links'>
                    <a href={props.project.readMe} target='_blank' rel='noreferrer'>Read more</a>
                    {props.project.hasOwnProperty('url') && <a href={props.project.url} target='_blank' rel='noreferrer'>Go to site</a>}
                </div>
            </div>
            <img src={props.project.image} alt={props.project.alt}></img>
        </li>
    );
}

export default PortfolioListItem;