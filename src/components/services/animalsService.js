import axios from 'axios';
import config from '../../config';

const BASE_URL = config.backendUrl;

export { animalRecordsFound, animalRecordsLost, saveAnimal};


const animalRecordsFound = (skip, limit) => {
    const url = `${BASE_URL}/api/v1/animals/?status=found&limit=${limit}&skip=${skip}&order=-1`;
    //axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
    return axios.get(url).then(response => response.data);
}

const animalRecordsLost = (skip=0, limit=10) => {
    const url = `${BASE_URL}/api/v1/animals/?status=lost&limit=${limit}&skip=${skip}&order=-1`;
    //axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
    return axios.get(url).then(response => response.data);
}

const saveAnimal = (animal) => {
    const url = `${BASE_URL}/api/v1/animals`;
    //axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
    return axios.post(url, animal).then(response => response.data);
}
