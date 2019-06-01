import React, { Component } from 'react';
import {animalRecordsLost} from "./services/animalsService";
import {Link} from "react-router-dom";
import "../styles/AnimalGrid.scss";
import ShortAnimalCard from './ShortAnimalCard';
import Pagination from "react-js-pagination";
import "bootstrap/dist/css/bootstrap.min.css";

class LostList extends Component {
    constructor(props) {
        super(props);
        this.state = {listFound: null,
            totalItemsCount:null,
            itemsCountPerPage:6,
            activePage: 1}
    }
    async componentDidMount() {
        const recordsResponse = await animalRecordsLost(this.state.skip,this.state.itemsCountPerPage);
        const listFound = recordsResponse.list;
        const count = recordsResponse.count;
        this.setState({listFound, totalItemsCount:count });
    }
    retrievePage = async (page) => {
        const skip = (page -1) * this.state.itemsCountPerPage;
        const recordsResponse = await animalRecordsLost(skip,this.state.itemsCountPerPage);
        const listFound = recordsResponse.list;
        const count = recordsResponse.count;
        this.setState({listFound, totalItemsCount:count ,activePage:page});
    }

    render() {
        console.log(this.state.listFound);
        return (<div><h4>Animales Perdidos</h4>
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

export default LostList;