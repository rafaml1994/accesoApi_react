import {Grid} from "@nextui-org/react";
import CollapseText from "./collapse";
import { useState, useEffect } from "react";
import * as API from '../services/launches';


function Gridcomp(){
  
  const [nombres, setNombres] = useState([]);

  useEffect(() => {
    API.getAll().then(setNombres);
  },[])

    return (
        <Grid.Container gap={2} justify="center">
            <CollapseText/> 
        </Grid.Container>
    );
}
    
export default Gridcomp;