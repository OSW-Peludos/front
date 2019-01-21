import axios from 'axios';

const BASE_URL = 'https://peludos-osw-back.herokuapp.com';
//const BASE_URL = 'http://localhost:3001';

export { saveAnimal};

const saveAnimal = (animal) => {
    const url = `${BASE_URL}/api/save_pet`;
    //axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
    return axios.post(url, animal).then(response => response.data);
}