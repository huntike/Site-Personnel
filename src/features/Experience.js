        import React, { useState } from "react";
        import { Box, Diagram, Stack, Menu} from 'grommet'

        export const Experience = () => {

            

            return(
                <Box>
                    <Stack guidingChild={1}>
                    <Diagram
                        connections={[
                        {
                            fromTarget: '1',
                            toTarget: '2',
                            thickness: 'medium',
                            color: 'neutral-3',
                        },
                        {
                            fromTarget: '1',
                            toTarget: '4',
                            thickness: 'medium',
                            color: 'neutral-3',
                            type: 'rectilinear',
                        },
                        ]}
                    />
                    <Box align="center">
                        <Box  direction="row">
                            <Box id="1" margin="xlarge" pad="xlarge" background="light-4" />
                        </Box>
                        <Box direction="row">
                        <Box id="2" margin="xlarge" pad="xlarge" background="light-4" />

                        </Box>
                        <Box direction="row">
                        <Box id="3" margin="xlarge" pad="xlarge" background="light-4" />

                        </Box>
                        <Box direction="row">
                        <Box id="4" margin="xlarge" pad="xlarge" background="light-4" />

                        </Box>
                    </Box>
                    </Stack>
                    
                </Box>
            );
        }
    
        export default Experience;