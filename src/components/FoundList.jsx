import React, { Component } from 'react';
import {animalRecordsFound} from "./services/animalListService";
import {Link} from "react-router-dom";
import "../styles/AnimalGrid.scss";
import ShortAnimalCard from './ShortAnimalCard';
import Pagination from "react-js-pagination";
import "bootstrap/dist/css/bootstrap.min.css";

export class FoundList extends Component {
    constructor(props) {
        super(props);
        this.state = {listFound: null,
            totalItemsCount:null,
            itemsCountPerPage:4,
            activePage: 1}
    }
    async componentDidMount() {
        const recordsResponse = await animalRecordsFound(this.state.skip,this.state.itemsCountPerPage);
        const listFound = recordsResponse.list;
        const count = recordsResponse.count;
        this.setState({listFound, totalItemsCount:count });
    }
    retrievePage = async (page) => {
        const skip = (page -1) * this.state.itemsCountPerPage;
        const recordsResponse = await animalRecordsFound(skip,this.state.itemsCountPerPage);
        const listFound = recordsResponse.list;
        const count = recordsResponse.count;
        this.setState({listFound, totalItemsCount:count ,activePage:page});
    }

    render() {
        console.log(this.state.listFound);
        return (<div><h4>Animales Encontrados</h4>
            <div className="grid-container">
                {this.state.listFound && this.state.listFound.map((foundAnimal, index) =>
                    <div key={index} className="grid-item">
                        <ShortAnimalCard id={foundAnimal._id} record={foundAnimal}/>
                    </div>
                )}
            </div>
            <Pagination
                activePage={this.state.activePage}
                itemsCountPerPage={this.state.itemsCountPerPage}
                totalItemsCount={this.state.totalItemsCount}
                pageRangeDisplayed={5}
                onChange={this.retrievePage}
                itemClass="page-item"
                linkClass="page-link"
            />
        </div>);
    }
}

export default FoundList;