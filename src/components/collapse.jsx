import { Collapse, Text } from "@nextui-org/react";
import { useState, useEffect } from "react";
import * as API from '../services/launches';

export default function CollapseText() {

    const [launches, setLaunches] = useState([]);

    useEffect(() => {
      API.getAll().then(setLaunches);
    },[])
    
    return (
        <Collapse.Group >
        {launches.map((launch) => (
             <Collapse shadow key={launch.flight_number} title={launch.mission_name}>
             <Text>Este es el año de lanzamiento: {launch.launch_year}</Text>
            </Collapse>
        ))} 
        </Collapse.Group>
    );
  }