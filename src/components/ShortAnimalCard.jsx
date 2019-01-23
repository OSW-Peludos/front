import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { FaDog } from 'react-icons/fa';
import { FaCat } from 'react-icons/fa';
import { Fainfo } from 'react-icons/fa';

import "../styles/Card.scss";
import {FaInfo, FaInfoCircle} from "react-icons/fa/index";


class ShortAnimalCard extends Component {
    constructor(props) {
        super(props);
        this.state = {record:props.record}
    }
    render() {
        if(this.state.record){
            return (<div className="card">
                {this.getImage(this.state.record)}
                <div className="container">
                    {this.getDescription(this.state.record)}
                </div>
            </div>);
        }
    }

    getImage = (record) => {
        if(record.animal.photoId){
            return (<img className="img-container" src={record.animal.photoId} alt="Avatar"></img>);
        }
    }

    getIcon = (record) => {
        const animalType = record.animal.animalType;
        if (animalType==="dog"){
            return (<FaDog></FaDog>);
        } else if (animalType==="cat"){
            return (<FaCat></FaCat>);
        }
    }

    getDescription = (record) => {
        const animalIcon = this.getIcon(record);
        if(record.animal) {
            return(<div>
                <p className="description">{animalIcon}  {this.getRace(record)}  {this.getSize(record)}  {this.getColor(record)}</p>
                <p>{this.getDateText(record)}</p>
                <p>{this.state.record._id}</p>
                </div>);
        }
    }

    getSize = (record) => {
        switch (record.animal.size) {
            case "small":
                return "pequeño";
                break;
            case "medium":
                return "mediano";
                break;
            case "big":
                return "grande";
                break;
            default:
                break;
        }
    }

    getColor = (record) => {
        return record.animal.color;
    }

    getRace = (record) => {
        return record.animal.animalRace;
    }

    getDateText = (record) => {
        const status = (record.status === "lost")? "perdido" : "encontrado";
        const dateFormatted = (record.date) ? new Date(record.date).toLocaleDateString(): null;
        return status + " " +  dateFormatted;
    }
}

export default ShortAnimalCard;