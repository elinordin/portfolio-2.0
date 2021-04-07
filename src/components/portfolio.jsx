import React from 'react';
import PortfolioListItem from '../components/portfolioListItem.jsx'
import projects from '../assets/data/projectData'

function Portfolio() {
    return (
        <ul className='portfolio-grid'>
            {projects.map((project) => <PortfolioListItem project={project}/>)}
        </ul>
    );
}

export default Portfolio;