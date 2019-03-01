import React, { Component } from 'react';
import '../App.css';
import {saveAnimal} from './services/animalRegistryService';

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
            photo: undefined
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
        const request = this.converToAnimalRequest()
        saveAnimal(request) // llamada al backend
          .then((res) => console.log(res))
          .catch((err) => console.log(err));
       
    }

    handlefile(ev){
        this.setState({photo: ev.target.files[0]})
    }

    //funcion de formateo JSON sin el state
    converToAnimalRequest = () => {
        //obervation: this.state.direccion, serian las coordenadar
        // faltaria añadir la imagen
       return {
                animal: {
                    animalType: this.state.animal,
                    animalRace: this.state.raza,
                    obervation: this.state.caracteristicas,
                    },
                contact:{
                    contacName: this.state.nombre,
                    contactEmail: this.state.email
                    },
                status:"lost",
                date: new Date()
            }

    }

    render() {
        return (
            <form className="lost">
                
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
                <input type="file" placeholder="Subir foto" className="inputLost" onChange={this.handlefile}/>
                <input value={this.state.nombre} onChange={this.handleChange} 
                    name="nombre" type="text" placeholder="Nombre" className="inputLost" />
                <input value={this.state.email} onChange={this.handleChange} 
                    name="email" type="email" placeholder="Email" className="inputLost" />
                <input type="submit" value="Enviar" className="send" onClick={this.handleClick} />
            
                <p>{JSON.stringify(this.state)}</p>
             </form>
            );
    }
}

export default LostForm;