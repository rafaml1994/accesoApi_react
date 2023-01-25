import { Input, Button,Spacer  } from '@nextui-org/react';
import { useState } from 'react';
import { addUser } from '../services/launches';

const initialValue = {
    nombre: "",
    email : ""
}

function form () {
        
        const [user, setUser] = useState(initialValue);
        const {nombre,email} = user;   
    
        const onValueChange = (e) =>
        {
          //  console.log(e);
          // console.log(e.target.value);
            setUser({...user, [e.target.name]: e.target.value});
           console.log(user);
        }
    
        const addUserDetails = async (e) =>{
            console.log("entra");
           await addUser(user);
        }

    return(
        <form >
            <Input labelPlaceholder="Nombre" name="nombre" onChange={(e) => onValueChange(e)} value={nombre}/>;
            <Input labelPlaceholder="Email" name="email" onChange={(e) => onValueChange(e)} value={email}/>;
            <Button size="sm" color='gradient' variant="contained" onClick={() => addUserDetails() } align="center">Enviar</Button>
        </form>
    )
}

export default form;