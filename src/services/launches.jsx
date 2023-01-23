const URL = 'https://pruebasnode-production.up.railway.app/';

export async function getAll(){
    try {
        const response = await fetch(`${URL}`);
        const data =  response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log(error);
    }
}