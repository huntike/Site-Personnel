import React from 'react';
import {Grid, Box,Heading, Paragraph} from 'grommet';
import './LandingPage.css'

export const LandingPage= () => {
    return(
        <Box>
            <Grid 
  rows={['xsmall','medium', 'large']}
  columns={['xsmall','large', 'large']}
  gap="large"
  areas={[
    
    { name: 'nav', start: [1, 1], end: [1, 1] },
    { name: 'main', start: [2, 1], end: [2, 1] },
  ]}
>
 
  <Box gridArea="nav" background="light-1"  ><img src={process.env.PUBLIC_URL + '/img//IMG_2694.jpg'} className="main-img"/></Box>
  <Box gridArea="main" background="light-5"  ><Heading className="title">Etudiant a Ynov</Heading>
            <Paragraph></Paragraph></Box>
</Grid>
             
              

        
            


        </Box>

        
    )

}
export default LandingPage;