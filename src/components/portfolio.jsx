import React, {useState, useEffect} from 'react';
import PortfolioListItem from '../components/portfolioListItem.jsx'
import projects from '../assets/data/projectData'

import getLanguages from '../assets/data/languages'

function Portfolio() {
    const [languages, setLanguages] = useState([])

    useEffect(() => {
        const fetchLanguages = async () => {
            const languageArray = await getLanguages()
            setLanguages(languageArray)
        }
        fetchLanguages()
    }, []);

    return (
        
        <ul className='portfolio-grid'>
            {projects.map((project) => <PortfolioListItem key={project.key} project={project} stats={languages}/>)}
        </ul>
    );
}

export default Portfolio;