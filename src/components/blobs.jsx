import React from 'react';
import interests from '../assets/data/interests.js'

import Blob from '../components/blob'

function Blobs() {
    return (
        <ul className='blob-list'>
            {interests.map(interest => <Blob key={interest.key} interest={interest}/>)}
        </ul>
    );
}

export default Blobs;