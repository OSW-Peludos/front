import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './Home';
import LostCard from './LostCard';
import LostForm from './LostForm';
import LostList from './LostList';

import FoundCard from './FoundCard';
import FoundForm from './FoundForm';
import FoundList from './FoundList';

class Roots extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="container">
                <Route path="/home" component={Home} />
                <Route path="/perdido/id=:id" component={LostCard} />
                <Route path="/nuevo_perdido" component={LostForm} />
                <Route path="/perdidos" component={LostList} />

                <Route path="/encontrado/id=:id" component={FoundCard} />
                <Route path="/nuevo_encontrado" component={FoundForm} />
                <Route path="/encontrados" component={FoundList} />
            </div>);
    }
}

export default Roots;