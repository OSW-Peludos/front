import React, { Component } from 'react';
import '../App.css';
import {saveAnimal} from './services/animalsService';

class LostForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            animal:'',
            raza:'',
            caracteristicas:'',
            nombre:'',
            phone: '',
            email:'',
            image: '',
            latitude: 0,
            longitude: 0,
            
        }
        this.handleChange = this.handleChange.bind(this);
    }
    componentDidMount(){
        this.getLocation()
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

    //funcion de formateo JSON sin el state
    converToAnimalRequest = () => {
        //obervation: this.state.direccion, serian las coordenadar
        // faltaria añadir la imagen
       return {
                animal: {
                    animalType: this.state.animal,
                    animalRace: this.state.raza,
                    obervation: this.state.caracteristicas,
                    photo: this.state.image,
                    latitude: this.state.latitude,
                    longitude: this.state.longitude

                    },
                contact:{
                    contactName: this.state.nombre,
                    contactPhone: this.state.phone,
                    contactEmail: this.state.email
                    },
                status:"lost",
                date: new Date()
            }

    }
    async getLocation(){
        try {
            await navigator.geolocation.getCurrentPosition(pos => {
                const {latitude, longitude } = pos.coords
                this.setState({
                    latitude,
                    longitude,
                }, console.log(pos))
            })

        } catch(err){
            console.log(err)
        }
    }
    onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
          let reader = new FileReader();
          reader.onload = (e) => {
            this.setState({image: e.target.result});
          };
          reader.readAsDataURL(event.target.files[0]);
        }
      }
      onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
          this.setState({
            image: URL.createObjectURL(event.target.files[0])
          });
        }
       }

    render() {
        return (
            <div className="lost">
                <img id="target" src={this.state.image} className="img"/>
                <input type="file" placeholder="Subir foto" onChange={this.onImageChange} 
                className="selectImage" id="group_image" accept="image/x-png,image/gif,image/jpeg"/>
                <select value={this.state.animal} onChange={this.handleChange} 
                    name="animal" type="text" placeholder="Animal" className="inputLost">
                    <option className="option">Selecciona Animal</option>
                    <option className="option" value="dog">Perro</option>
                    <option className="option" value="cat">Gato</option>
                    <option className="option">Pajaro</option>
                </select>
                <input value={this.state.raza} onChange={this.handleChange}
                    name="raza" type="text" placeholder="Raza" className="inputLost" />
                <textarea value={this.state.caracteristicas} onChange={this.handleChange}
                name="caracteristicas" type="text" placeholder="Caracteristicas" className="inputLost">
                </textarea >
                <input value={this.state.nombre} onChange={this.handleChange} 
                    name="nombre" type="text" placeholder="Nombre de contacto" className="inputLost" />
                    <input value={this.state.phone} onChange={this.handleChange} 
                    name="phone" type="number" placeholder="Telefono de contacto" className="inputLost" />
                <input value={this.state.email} onChange={this.handleChange} 
                    name="email" type="email" placeholder="Email de contacto" className="inputLost" />
                <input type="submit" value="Enviar" className="send" onClick={this.handleClick} />
            
                <p>{JSON.stringify(this.state)}</p>
             </div>
            );
    }
}

export default LostForm;