import React, { Component } from 'react';
import '../App.css';
import {postFichaPerdidos} from '../services/services';

class LostForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            direccion:'',
            animal:'',
            raza:'',
            caracteristicas:'',
            nombre:'',
            email:'',
            
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange (e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleClick = (e) => {
        e.preventDefault();
        postFichaPerdidos(this.state)
          .then((res) => console.log(res))
          .catch((err) => console.log(err));
       
    }

    render() {
        return (
            <div className="lost">
                
                <input value={this.state.direccion} onChange={this.handleChange} 
                    name="direccion" type="text" placeholder="Direccion" className="inputLost" />
                <select value={this.state.animal} onChange={this.handleChange} 
                    name="animal" type="text" placeholder="Animal" className="inputLost">
                    <option>Selecciona</option>
                    <option>Perro</option>
                    <option>Gato</option>
                </select>
                <select value={this.state.animal} onChange={this.handleChange}
                    name="raza" type="text" placeholder="Raza" className="inputLost">
                    <option>Selecciona</option>
                    <option>raza</option>
                </select>
                <textarea value={this.state.caracteristicas} onChange={this.handleChange}
                name="caracteristicas" type="text" placeholder="Caracteristicas" className="inputLost">
                </textarea >
                <input type="file" placeholder="Subir foto" className="inputLost" />
                <input value={this.state.nombre} onChange={this.handleChange} 
                    name="nombre" type="text" placeholder="Nombre" className="inputLost" />
                <input value={this.state.email} onChange={this.handleChange} 
                    name="email" type="email" placeholder="Email" className="inputLost" />
                <input type="submit" value="Enviar" className="send" onClick={this.handleClick} />
            
                <p>{JSON.stringify(this.state)}</p>
             </div>
            );
    }
}

export default LostForm;