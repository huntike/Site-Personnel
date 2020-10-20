import React from 'react';
import {Grid, Box,Heading, Paragraph,Text,Stack,Meter} from 'grommet';
import './LandingPage.css';
import {Skills} from './skills';

export const LandingPage= () => {
    
    return(
        <Box>
            <Grid 
            rows={['xsmall','medium', 'medium']}
            columns={['xsmall','large', 'large']}
            gap="large"
            areas={[
                
                { name: 'nav', start: [1, 1], end: [1, 1] },
                { name: 'main', start: [2, 1], end: [2, 1] },
                { name: 'stat', start: [1, 2], end: [2, 2] },

            ]}
            >
 
                <Box gridArea="nav" background="light-1"  >
                <Grid gap="xsmall" columns={{ count: 2, size: 'medium' }}>
                    <img src={process.env.PUBLIC_URL + '/img//IMG_2694.jpg'} className="main-img"/>
                    <Box className="information">
                        <Paragraph className="name">Logan Le Lay</Paragraph>
                        <Paragraph className="age">23 ans</Paragraph>
                    </Box>
                </Grid>

                </Box>
                <Box gridArea="main" background="light-5"  >
                    <Heading className="title">Etudiant a Ynov</Heading>
                    <Paragraph></Paragraph>
                </Box>
                <Box gridArea="stat" align="center" pad="large" background="light-3">
                    <Heading>Compétences</Heading>
                    
                    <Skills/>
                </Box>
            </Grid>          
        </Box>        
    )

}
export default LandingPage;