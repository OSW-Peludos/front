import axios from 'axios';

const BASE_URL = 'https://peludos-osw-back.herokuapp.com';
//const BASE_URL = 'http://localhost:3001';

export { getListFound, getListLost};


/////api/list/?status=lost&limit=10&skip=0&order=-1
const getListFound = (skip, limit) => {
    const url = `${BASE_URL}/api/list/?status=found&limit=${limit}&skip=${skip}&order=-1`;
    //axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
    return axios.get(url).then(response => response.data);
}

/////api/list/?status=lost&limit=10&skip=0&order=-1
const getListLost = (skip, limit) => {
    const url = `${BASE_URL}/api/list/?status=lost&limit=${limit}&skip=${skip}&order=-1`;
    //axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
    return axios.get(url).then(response => response.data);
}
