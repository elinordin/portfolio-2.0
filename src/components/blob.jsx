import React, { useState } from 'react';

function Blob(props) {
    const [isBlobHovered, setIsBlobHovered] = useState(false)
    return (
        <li className='blob' style={{
            backgroundColor: props.interest.fill,
            padding: props.interest.padding
            }}>{isBlobHovered? props.interest.interest : ' '}</li>
    );
}

export default Blob;