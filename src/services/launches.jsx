import axios from "axios";

const client = axios.create({
    baseURL: "https://pruebasnode-production.up.railway.app" 
  });

export async function getAll(){
    try {
        const response = await client.get('/');
        const data =  response.data;
        return data;
    } catch (error) {
        console.log(error);
    }
}

export const addUser = async (user) => {
    console.log(client);
    return await client.post(`/add`,user);
    
}