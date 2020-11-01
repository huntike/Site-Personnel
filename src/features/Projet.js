import React from 'react';
import {Card,Box,CardHeader,CardFooter,CardBody,Tab,Tabs} from 'grommet';
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
         



            <Tabs  margin="large">
                <Tab  title="Projet Unity">
                    
                <Box direction="row" height="large" wrap="true" justify="center" align="center" >
                    <CostumCard margin="auto"  height="medium" width="medium" background="light-1" >
                        <CardHeader pad="medium">GreenPitch</CardHeader>
                        <CardBody pad="medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</CardBody>
                        <CardFooter pad={{horizontal: "medium"}} background="light-2">   
                        
                        </CardFooter>
                    </CostumCard>
                    <CostumCard margin="auto" height="medium" width="medium" background="light-3" >
                        <CardHeader pad="medium">Tower Of Farm</CardHeader>
                        <CardBody pad="medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</CardBody>
                        <CardFooter pad={{horizontal: "medium"}} background="light-2">   
                        
                        </CardFooter>
                    </CostumCard>
                    <CostumCard margin="auto" height="medium" width="medium" background="light-1" >
                        <CardHeader pad="medium">Escape</CardHeader>
                        <CardBody pad="medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</CardBody>
                        <CardFooter pad={{horizontal: "medium"}} background="light-2">   
                        
                        </CardFooter>
                    </CostumCard>


                    </Box>
                    
                </Tab>
                <Tab title="Projet Web" align="center">
                <Box direction="row" height="large" wrap="true" justify="center" align="center" >                
                    <CostumCard margin="auto" height="medium" width="medium" background="light-1" >
                        <CardHeader pad="medium">BeToMood</CardHeader>
                        <CardBody pad="medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</CardBody>
                        <CardFooter pad={{horizontal: "large"}} background="light-2">   
                        
                        </CardFooter>
                    </CostumCard>
                    <CostumCard margin="auto" height="medium" width="medium" background="light-1" >
                        <CardHeader pad="medium">Log 1</CardHeader>
                        <CardBody pad="medium">site destiné au corps médical pour de la gestion de patient</CardBody>
                        <CardFooter pad={{horizontal: "large"}} background="light-2">   
                        
                        </CardFooter>
                    </CostumCard>
                    <CostumCard margin="auto" height="medium" width="medium" background="light-1" >
                        <CardHeader pad="medium">start and sport</CardHeader>
                        <CardBody pad="medium">site web sur le sport et l'alimentation</CardBody>
                        <CardFooter pad={{horizontal: "large"}} background="light-2">   
                        
                        </CardFooter>
                    </CostumCard>
                </Box>
                </Tab>
            </Tabs>           
  
        </Box>

    );

}
export default Projet;