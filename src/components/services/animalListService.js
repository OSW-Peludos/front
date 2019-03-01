import axios from 'axios';
import config from '../../config';

const BASE_URL = config.backendUrl;
//const BASE_URL = 'http://localhost:3001';

export { animalRecordsFound, animalRecordsLost};


/////api/list/?status=lost&limit=10&skip=0&order=-1
const animalRecordsFound = (skip, limit) => {
    const url = `${BASE_URL}/api/list/?status=found&limit=${limit}&skip=${skip}&order=-1`;
    //axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
    return axios.get(url).then(response => response.data);
}

/////api/list/?status=lost&limit=10&skip=0&order=-1
const animalRecordsLost = (skip, limit) => {
    const url = `${BASE_URL}/api/list/?status=lost&limit=${limit}&skip=${skip}&order=-1`;
    //axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
    return axios.get(url).then(response => response.data);
}
