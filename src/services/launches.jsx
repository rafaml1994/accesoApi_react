import axios from "axios";

const URL = 'https://pruebasnode-production.up.railway.app/';

export async function getAll(){
    try {
        const response = await axios.get(`${URL}`);
        const data =  response.data;
        console.log(data);
        return data;
    } catch (error) {
        console.log(error);
    }
}