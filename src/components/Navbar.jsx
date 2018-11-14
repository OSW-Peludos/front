import React, { Component } from 'react';
import { Link } from "react-router-dom";

import "./Navbar.css";
class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (<div className="navbar">
            Navbar &nbsp;&nbsp;
            <Link to="/home">Home</Link> &nbsp;&nbsp;
            <Link to="/encontrados">encontrados</Link> &nbsp;&nbsp;
            <Link to="/perdidos">perdidos</Link> &nbsp;&nbsp;
            <Link to="/nuevo_encontrado">nuevo encontrado</Link> &nbsp;&nbsp;
            <Link to="/nuevo_perdido">nuevo perdido</Link>

        </div>);
    }
}

export default Navbar;