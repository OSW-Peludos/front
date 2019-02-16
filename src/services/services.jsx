import axios from 'axios';

const BASE_URL = 'http://localhost:3001/';
export { postFichaPerdidos };


// /stateExecution/state-execution-airbnb-scraping?skip=0&limit=2
const postFichaPerdidos = () => {
    
    
    
    //let json = JSON.stringify(this.state)
    const url = `${BASE_URL}/stateExecution/`;
    //axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
    return axios.post(url).then(response => response.data);
}
