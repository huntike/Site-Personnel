import React , { useState } from 'react';
import {Card,Button,Box, Grid,CardHeader,CardFooter,CardBody} from 'grommet';




export const Projet= () => {
    let activeTab = 0 ;
    
    function ChangeActiveTab(id){
        

        if (id===1){
            activeTab = 1;

        }else if (id===2){
            activeTab = 2;

        }
    }

    function ToggleCard() {
        console.log("in toogleCard");
        console.log(activeTab);

    if(activeTab== 0 ){
        return(
            <Card  height="small" width="small" background="light-1">
                <CardHeader pad="medium">Header</CardHeader>
                <CardBody pad="medium">Body</CardBody>
                <CardFooter pad={{horizontal: "small"}} background="light-2">   
                <Button>hello</Button>
                
                
                
                <Button></Button> 
                </CardFooter>
            </Card>
        );
    
    } else if(activeTab==1){
        return(
            <h1>projet 2</h1>
        );
    }
    }

    return(
        <Box>
            <h1>Projet</h1>

            <Grid
                rows={['small', 'medium']}
                columns={['medium', 'xlarge']}
                gap="small"
                areas={[
              { name: 'header', start: [0, 0], end: [1, 0] },
              { name: 'nav', start: [0, 1], end: [0, 1] },
               { name: 'main', start: [1, 1], end: [1, 1] },
              ]}
              >
            <Box gridArea="header" background="brand">
                <Button onClick={() => ChangeActiveTab(1)}>Projet 1</Button>
                <Button onClick={() => ChangeActiveTab(2)}>Projet 2</Button>  

            </Box> 
            <Box gridArea="nav" background="light-5"></Box> 
            <Box gridArea="main" background="light-2">{ToggleCard()}</Box>
            </Grid>
        </Box>

    );

}
export default Projet;