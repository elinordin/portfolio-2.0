import React from 'react';

function PortfolioListItem(props) {
    return (
        <li className='box'>
            <div className='info-wrapper'>
                <h3>{props.project.title}</h3>
                <h4>What I did</h4>
                <p>{props.project.whatIDid}</p>
                <h4>Tech Stack</h4>
                <p>{props.project.techStack}</p>
                <a src={props.project.readMe}>Read more</a>
                <a src={props.project.url}>Go to site</a>
            </div>
            <img src={props.project.image} alt={props.project.alt}></img>
        </li>
    );
}

export default PortfolioListItem;