import React, { Component } from 'react';

class FoundCard extends Component {
    constructor(props) {
        super(props);
        this.state = { id: props.match.params.id };
    }
    render() {
        return (<div>FoundView {this.state.id}</div>);
    }
}

export default FoundCard;