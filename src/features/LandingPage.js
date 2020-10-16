import React from 'react';
import {Grid, Box} from 'grommet';

export const LandingPage= () => {
    return(
        
        <Grid 
            rows={['small', 'medium']}
            columns={['medium', 'xlarge']}
            gap="medium"
            areas={[
            { name: 'header', start: [0, 0], end: [1, 0] },
            { name: 'nav', start: [0, 1], end: [0, 1] },
            { name: 'main', start: [1, 1], end: [1, 1] },
            ]}
        >
            <Box gridArea="header" background="brand" />
            <Box gridArea="nav" background="light-5" />
            <Box gridArea="main" background="light-2" />
        </Grid>
    )

}
export default LandingPage;