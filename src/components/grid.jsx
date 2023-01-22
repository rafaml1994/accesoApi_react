import {Grid} from "@nextui-org/react";
import CollapseText from "./collapse";


function Gridcomp(){
    return (
        <Grid.Container gap={2} justify="center">
            
          <Grid xs={4}>
            <CollapseText/> 
          </Grid>
        </Grid.Container>
    );
}
    
export default Gridcomp;