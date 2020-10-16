        import React, { useState } from "react";
        import { Box, Grid, Header, Menu} from 'grommet'

        export const Experience = () => {

            

            return(
                <Box>
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
                    
                </Box>
            );
        }
    
        export default Experience;