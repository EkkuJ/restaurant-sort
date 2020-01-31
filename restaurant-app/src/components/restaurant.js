import React, { Component } from 'react';

class Restaurant extends Component {

    render() {
        return (
            <div>
                <img className="Image"
                    src={this.props.image}
                    alt={this.props.name}
                />
            </div>
        );
        
    }
}

export default Restaurant;