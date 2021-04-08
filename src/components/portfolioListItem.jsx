import React, { useState } from 'react';

function PortfolioListItem(props) {
    const [style, setStyle] = useState({opacity: 0})

    return (
        <li className='box' 
            onMouseEnter={() => setStyle({opacity: 1})} 
            onMouseLeave={() => setStyle({opacity: 0})}
            onFocus={() => setStyle(style.opacity === 0 ? {opacity: 1}: {opacity: 0})}
            onBlur={() => setStyle(style.opacity === 0 ? {opacity: 1}: {opacity: 0})}
            onClick={() => setStyle(style.opacity === 0 ? {opacity: 1}: {opacity: 0})} 
        >
            <div className='info-wrapper' style={style}>
                <div className='text'>
                    <h3 className='title'>{props.project.title}</h3>
                    <p>{props.project.bullets}</p>
                </div>

                <div className='links'>
                    <a href={props.project.readMe}>Read more</a>
                    {props.project.hasOwnProperty('url') && <a href={props.project.url}>Go to site</a>}
                </div>
            </div>
            <img src={props.project.image} alt={props.project.alt}></img>
        </li>
    );
}

export default PortfolioListItem;