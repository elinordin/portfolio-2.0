import React from 'react';

function PortfolioListItem(props) {

    return (
        <li className='box'>
            <div className='info-wrapper'>
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