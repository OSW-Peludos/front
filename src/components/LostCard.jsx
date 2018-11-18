import React, { Component } from 'react';

class LostCard extends Component {
    constructor(props) {
        super(props);
        this.state = { id: props.match.params.id };
    }
    render() {
        return (<div>LostView {this.state.id}</div>);
    }
}

export default LostCard;