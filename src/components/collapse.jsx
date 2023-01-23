import { Grid,Collapse, useResize, Text, User } from "@nextui-org/react";

import { useState, useEffect } from "react";
import * as API from '../services/launches';

export default function CollapseText() {

    const [nombres, setNombres] = useState([]);

    useEffect(() => {
      API.getAll().then(setNombres);
    },[])
    
    return (
      nombres.map((n)=>(
        <Grid key={n.id}>
         <Collapse.Group >
              <Collapse shadow title={`Contacto ${n.nombre}`}>
              <User 
                src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                name={n.nombre}
              />
              <Text>Su apellido es: {n.apellidos}</Text>
             </Collapse>
         </Collapse.Group>
        </Grid>
    )));
  }