import React, { Component } from 'react';
import { Link } from "react-router-dom";

import "../styles/Navbar.scss";
class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (<nav>
            <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/encontrados">encontrados</Link></li>
                <li><Link to="/perdidos">perdidos</Link></li>
                <li><Link to="/nuevo_encontrado">nuevo encontrado</Link></li>
                <li><Link to="/nuevo_perdido">nuevo perdido</Link></li>
                <li><a  id="logo">LOGO</a></li>
                <a href="#" id="menu-icon"></a>
            </ul>
        </nav>);
    }
}

export default Navbar;