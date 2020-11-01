import React from 'react';
import { Box,Heading, Paragraph,Avatar} from 'grommet';

import {Skills} from './skills';


export const LandingPage= () => {
    
    
    return(
        <Box>
 
            <Box direction="row" height="large" wrap="true" justify="center" align="center" margin="medium" >
                <Box flex="grow"direction="row" width="xmedium" height="xmedium"justify="center" align="center" background="light-1"  >
                    <Box width="small" height="small"  >
                    <Avatar size="xxlarge" round="full" fit="cover" src={process.env.PUBLIC_URL + '/img//IMG_2694.jpg'} />

                    </Box>
                    <Box margin="medium" justify="center" align="center" >
                        <Paragraph >Logan Le Lay</Paragraph>
                        <Paragraph >23 ans</Paragraph>
                    </Box>
               

                </Box>
                <Box  flex="grow"width="xmedium" height="xmedium"background="light-5" align="center"  >
                    <Heading >Etudiant a Ynov</Heading>
                    <Paragraph >
                        Etudiant à YNOV TOULOUSE Ecole Supérieur en
                        Informatique, actuellement en Ingésup 5
                        eme année
                        en Master Développement Web.
                    </Paragraph>
                </Box>
            </Box>
                <Box fill="vertical" flex="true" height="large" align="center"  >
                    
                    
                    <Skills/>
                </Box>
                      
        </Box>        
    )

}
export default LandingPage;