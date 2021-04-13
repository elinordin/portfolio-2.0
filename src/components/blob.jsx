import React, { useState } from 'react';

function Blob(props) {
    const [isBlobHovered, setIsBlobHovered] = useState(false)
    return (
        <li className='blob' style={{
            backgroundColor: props.interest.fill,
            padding: props.interest.padding
        }}
        onMouseEnter={() => setIsBlobHovered(true)}
        onMouseLeave={() => setIsBlobHovered(false)}
        >
            {isBlobHovered ? props.interest.interest : ' '}
        </li>
    );
}

export default Blob;