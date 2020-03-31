import React from 'react';

const componentName =(props) => {
    const inputStyle = {
        border: '2px solid red'
    }
        return (
            <div>
                <input type="text" style={inputStyle} onChange={props.changeUN} defaultValue={props.currentUN} />
            </div>
        )
}

export default componentName;