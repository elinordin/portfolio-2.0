import React, { useEffect, useState } from 'react';
const dataLayer = window.dataLayer;

function Blob(props) {
    const [isBlobHovered, setIsBlobHovered] = useState(false)
    
    const svgSpeed = props.interest.speed + 's'
    const moveSpeed = (props.interest.speed + 19) + 's'

    useEffect(() =>{
        if (isBlobHovered){
            dataLayer.push({'event': 'Blob Hover', 'displayedInterest': props.interest.interest})
        }
    }, [isBlobHovered, props.interest.interest])

    return (
        <li 
        className='list-item' 
        style={{
            width: isBlobHovered? '7rem' : props.interest.size, 
            top: props.interest.position,
            left: '0%',
            animation: isBlobHovered? 
                `blobs ${moveSpeed} ease ${props.interest.delay} infinite paused backwards` 
                :  
                `blobs ${moveSpeed} ease ${props.interest.delay} infinite running backwards`
        }}            
        onMouseEnter={() => setIsBlobHovered(true)}
        onMouseLeave={() => setIsBlobHovered(false)}
        >
            <svg 
            className='blob'
            fill={props.interest.fill} 
            viewBox="0 0 200 200" 
            xmlns="http://www.w3.org/2000/svg" 
            >
                <path transform="translate(100 100)">
                    <animate repeatCount="indefinite" attributeName="d" dur={svgSpeed} values=
                        "M56.9,-66.8C72.7,-54.5,83.9,-35.6,86.8,-15.8C89.7,4,84.3,24.8,74,42.8C63.7,60.7,48.4,75.9,30.1,82.3C11.9,88.8,-9.4,86.6,-28.3,79.1C-47.1,71.6,-63.6,58.9,-74.1,42.1C-84.6,25.3,-89.1,4.4,-86.1,-15.7C-83.1,-35.7,-72.7,-54.9,-57.1,-67.3C-41.4,-79.6,-20.7,-85.1,-0.1,-85C20.5,-84.9,41,-79.1,56.9,-66.8Z; 
                        M49.5,-57.5C65,-45.9,79,-31.2,82.7,-14C86.4,3.1,79.8,22.7,69.9,40.9C60,59.1,46.9,76,29.1,84.5C11.3,93,-11.3,93.1,-30.5,85.4C-49.7,77.7,-65.4,62.3,-74.7,44.1C-84,26,-86.9,5.1,-84,-15.4C-81.1,-35.9,-72.5,-56,-57.5,-67.7C-42.6,-79.3,-21.3,-82.5,-2.2,-80C17,-77.4,33.9,-69,49.5,-57.5Z; 
                        M55.9,-64.5C71,-53.9,80.8,-34.9,81.9,-16.3C82.9,2.3,75.2,20.6,65.3,37.7C55.5,54.8,43.5,70.7,26.6,79.7C9.7,88.8,-12.1,91,-31.7,84.8C-51.4,78.7,-68.9,64.3,-78.5,46.1C-88.1,27.9,-89.8,5.9,-85.8,-14.9C-81.9,-35.6,-72.2,-55.1,-57,-65.7C-41.7,-76.4,-20.9,-78.2,-0.2,-77.9C20.4,-77.6,40.7,-75.2,55.9,-64.5Z;
                        M47.8,-61.4C58.9,-47.6,62.9,-29.7,64.4,-12.6C65.8,4.4,64.7,20.6,57.7,33.7C50.6,46.9,37.5,57.1,21.3,66.5C5,76,-14.5,84.7,-32.3,81.4C-50.1,78.1,-66.2,62.8,-75.6,44.6C-84.9,26.4,-87.5,5.3,-81.8,-12.3C-76.2,-29.8,-62.2,-43.7,-47.2,-56.8C-32.2,-70,-16.1,-82.5,1.1,-83.8C18.3,-85.2,36.6,-75.3,47.8,-61.4Z;
                        M51.4,-62.2C65.1,-49.7,73.7,-32.1,78.7,-12.6C83.7,6.9,85,28.4,75.7,43.1C66.5,57.9,46.7,66,27.3,71.7C7.8,77.4,-11.4,80.6,-29.1,75.9C-46.8,71.2,-63.1,58.5,-73.3,41.9C-83.6,25.2,-87.7,4.5,-84.2,-14.7C-80.6,-33.9,-69.5,-51.7,-54.2,-63.9C-38.9,-76.2,-19.4,-82.9,-0.3,-82.6C18.8,-82.2,37.6,-74.8,51.4,-62.2Z;
                        M56.9,-66.8C72.7,-54.5,83.9,-35.6,86.8,-15.8C89.7,4,84.3,24.8,74,42.8C63.7,60.7,48.4,75.9,30.1,82.3C11.9,88.8,-9.4,86.6,-28.3,79.1C-47.1,71.6,-63.6,58.9,-74.1,42.1C-84.6,25.3,-89.1,4.4,-86.1,-15.7C-83.1,-35.7,-72.7,-54.9,-57.1,-67.3C-41.4,-79.6,-20.7,-85.1,-0.1,-85C20.5,-84.9,41,-79.1,56.9,-66.8Z;" 
                    />
                </path>
            </svg>
            <p className='blob-text' style={{opacity: isBlobHovered? 1 : 0}}>{props.interest.interest}</p>
        </li>
    );
}

export default Blob;