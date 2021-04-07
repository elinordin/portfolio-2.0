import React from 'react';
import PortfolioListItem from '../components/portfolioListItem.jsx'
import projects from '../assets/data/projectData'

function Portfolio() {
    return (
        <div>
            <ul className='portfolio-grid'>
                {projects.map((project) => <PortfolioListItem project={project}/>)}
            </ul>
        </div>
    );
}

export default Portfolio;