import React , { useState } from 'react';
import {Card,Button,Box, Grid,CardHeader,CardFooter,CardBody,Collapsible} from 'grommet';




export const Projet= () => {

    const [showProjet1, setShowProjet1] = useState(false);
    const [showProjet2, setShowProjet2] = useState(false);

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
                <Button onClick={() => setShowProjet1(!showProjet1) & setShowProjet2(false)}>Projet 1</Button>
                <Button onClick={() => setShowProjet2(!showProjet2) & setShowProjet1(false) }>Projet 2</Button>  

            </Box> 
            <Box gridArea="nav" background="light-5"></Box> 
            <Box gridArea="main" background="light-2">
            
            <Collapsible direction="horizontal" open={showProjet1}>
            <Card  height="small" width="small" background="light-1">
                <CardHeader pad="medium">Header</CardHeader>
                <CardBody pad="medium">P1</CardBody>
                <CardFooter pad={{horizontal: "small"}} background="light-2">   
                <Button>hello</Button>
                
                
                
                <Button></Button> 
                </CardFooter>
            </Card>
            </Collapsible>
            
            <Collapsible direction="horizontal" open={showProjet2}>
            <Card  height="small" width="small" background="light-1">
                <CardHeader pad="medium">Header</CardHeader>
                <CardBody pad="medium">P2</CardBody>
                <CardFooter pad={{horizontal: "small"}} background="light-2">   
                <Button>hello</Button>
                
                
                
                <Button></Button> 
                </CardFooter>
            </Card>
            </Collapsible>
            
            
            </Box>
            </Grid>
        </Box>

    );

}
export default Projet;