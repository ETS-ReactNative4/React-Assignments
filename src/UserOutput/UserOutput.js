import React from 'react';
import './UserOutput.css'

const componentName = (props) => {
        return (
            <div className='UserOutput'>
                <p>Hello there</p>
                <p>The Angel of My Nightmare</p>
                <p>{props.userName}</p>
            </div>
        );
}

export default componentName;