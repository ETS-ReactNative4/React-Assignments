import React, { Component } from 'react';

class componentName extends Component {
    render() {
        return (
            <div>
                {this.props.text.length < 5 ? 'text too short' : 'text long enough'}
            </div>
        );
    }
}

export default componentName