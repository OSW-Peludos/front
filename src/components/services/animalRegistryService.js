import axios from 'axios';
import config from '../../config';

const BASE_URL = config.backendUrl;
//const BASE_URL = 'http://localhost:3001';

export { saveAnimal};

const saveAnimal = (animal) => {
    const url = `${BASE_URL}/api/registry/save_pet`;
    //axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
    return axios.post(url, animal).then(response => response.data);
}