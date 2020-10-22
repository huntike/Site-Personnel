import React from 'react';
import {Grid, Box,Heading, Paragraph,ResponsiveContext ,Image,Meter} from 'grommet';
import './LandingPage.css';
import {Skills} from './skills';

const ResponsiveGrid = ({ children, areas, ...props }) => {
const size = React.useContext(ResponsiveContext);
return (
  <Grid areas={areas[size]} {...props}>
    {children}
  </Grid>
);
};
export const LandingPage= () => {
    
    
    return(
        <Box>
 
            <Box direction="row" height="large" wrap="true" justify="center" align="center" >
                <Box flex="grow"direction="row" width="xmedium" height="xmedium"justify="center" align="center" background="light-1"  >
                    <Box width="small" height="small"  >
                    <Image fit="cover" src={process.env.PUBLIC_URL + '/img//IMG_2694.jpg'} />

                    </Box>
                    <Box  className="information">
                        <Paragraph className="name">Logan Le Lay</Paragraph>
                        <Paragraph className="age">23 ans</Paragraph>
                    </Box>
               

                </Box>
                <Box  flex="grow"width="xmedium" height="xmedium"background="light-5" align="center"  >
                    <Heading className="title">Etudiant a Ynov</Heading>
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