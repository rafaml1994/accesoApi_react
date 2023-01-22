const URL = 'https://api.spacexdata.com/v3/launches';

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