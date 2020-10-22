import React , { useState } from 'react';
import {Card,Box, Grid,CardHeader,CardFooter,CardBody,Collapsible,Tab,Tabs} from 'grommet';
import './Projet.css';
import styled from 'styled-components';




export const Projet= () => {
    const CostumCard = styled(Card)`
    transition: all 100ms;
    &:hover {
        transform: scale(1.1);
    }
`
  

    return(
        <Box height="xlarge">
            <h1>Projet</h1>



            <Tabs>
                <Tab  title="Projet Unity">
                    
                    <Grid gap="medium" columns={{ count: 'fit', size: 'small' }}>
                    <CostumCard className="Card" height="medium" width="large" background="light-1" >
                        <CardHeader pad="medium">GreenPitch</CardHeader>
                        <CardBody pad="medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</CardBody>
                        <CardFooter pad={{horizontal: "medium"}} background="light-2">   
                        
                        </CardFooter>
                    </CostumCard>
                    <Card className="Card" height="medium" width="large" background="light-3" >
                        <CardHeader pad="medium">Tower Of Farm</CardHeader>
                        <CardBody pad="medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</CardBody>
                        <CardFooter pad={{horizontal: "medium"}} background="light-2">   
                        
                        </CardFooter>
                    </Card>
                    <Card className="Card" height="medium" width="large" background="light-1" >
                        <CardHeader pad="medium">Escape</CardHeader>
                        <CardBody pad="medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</CardBody>
                        <CardFooter pad={{horizontal: "medium"}} background="light-2">   
                        
                        </CardFooter>
                    </Card>


                    </Grid>
                    
                </Tab>
                <Tab title="Projet Web" align="center">
                <Grid gap="medium" columns={{ count: 'fit', size: 'small' }}>
                    <Card className="Card" height="medium" width="medium" background="light-1" >
                        <CardHeader pad="medium">Header</CardHeader>
                        <CardBody pad="medium">P2</CardBody>
                        <CardFooter pad={{horizontal: "large"}} background="light-2">   
                        
                        </CardFooter>
                    </Card>
                    <Card className="Card" height="medium" width="medium" background="light-1" >
                        <CardHeader pad="medium">Header</CardHeader>
                        <CardBody pad="medium">P2</CardBody>
                        <CardFooter pad={{horizontal: "large"}} background="light-2">   
                        
                        </CardFooter>
                    </Card>
                    <Card className="Card" height="medium" width="medium" background="light-1" >
                        <CardHeader pad="medium">Header</CardHeader>
                        <CardBody pad="medium">P2</CardBody>
                        <CardFooter pad={{horizontal: "large"}} background="light-2">   
                        
                        </CardFooter>
                    </Card>
                </Grid>
                </Tab>
            </Tabs>           
  
        </Box>

    );

}
export default Projet;