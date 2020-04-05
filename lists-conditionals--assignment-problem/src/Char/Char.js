import React, { Component } from 'react';

class componentName extends Component {
    render() {
        const style = {
            border: '1px solid black',
            padding: '16px',
            display: 'inline-block',
            textAlign: 'center',
            margin: '16px'
          }
        return (
            <div style={style} onClick={this.props.clicked}>
                {this.props.character}
            </div>
        );
    }
}

export default componentName;