import React, { Component } from 'react';
import {getListFound} from "./services/animalListService";
import {Link} from "react-router-dom";

export class FoundList extends Component {
    constructor(props) {
        super(props);
        this.state = {listFound: null}
    }
    async componentDidMount() {
        const listFound = await getListFound(0,100);
        this.setState({listFound});
    }

    getFoundTable(){
        if(this.state.listFound) {
            return (
                <ul>
                {this.state.listFound.map((foundAnimal, index) =>
                    <li key={index}>{foundAnimal._id}</li>)}
            </ul>);
        }
    }

    render() {
        return (<div>FoundList
            {this.getFoundTable()}
        </div>);
    }
}

export default FoundList;