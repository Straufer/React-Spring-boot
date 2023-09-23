import axios from "axios";

const REST_API_URL = 'http://localhost:8080/orang';


class ApiService {
    getUsers(){
        return axios.get(REST_API_URL);
    }

    getUserById(id) { 
        const REST_INPUT = `${REST_API_URL}/${id}`; 
        return axios.get(REST_INPUT);
    }
}

export default new ApiService();

