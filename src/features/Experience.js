        import React, { useState } from "react";
        import { Box, Diagram, Stack, Collapsible, Button} from 'grommet'

        export const Experience = () => {
            const [showExp1, setShowExp1] = useState(false);
            const [showExp2, setShowExp2] = useState(false);
            const [showExp3, setShowExp3] = useState(false);
            const [showExp4, setShowExp4] = useState(false);


            

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
                            fromTarget: '2',
                            toTarget: '3',
                            thickness: 'medium',
                            color: 'neutral-3',
                           
                        },
                        {
                            fromTarget: '3',
                            toTarget: '4',
                            thickness: 'medium',
                            color: 'neutral-3',
                           
                        },

                        ]}
                    />
                    <Box align="center">
                        <Box  direction="row">
                            <Collapsible direction="horizontal" open={showExp1}>
                                <Box id="5" margin="xlarge" pad="xlarge" background="light-4">

                                    exp 1
                                </Box>
                            </Collapsible>
                            
                            <Box id="1" margin="xlarge" pad="xlarge" background="light-4">
                                <Button onClick={() => setShowExp1(!showExp1)}></Button>
                            </Box>
                        </Box>
                        <Box direction="row">
                        <Box id="2" margin="xlarge" pad="xlarge" background="light-4">
                        <Button onClick={() => setShowExp2(!showExp2)}></Button>

                            </Box> 
                        <Collapsible direction="horizontal" open={showExp2}>
                            <Box id="6" margin="xlarge" pad="xlarge" background="light-4">

                                exp 2
                            </Box>
                        </Collapsible>

                        </Box>
                        <Box direction="row">
                        <Collapsible direction="horizontal" open={showExp3}>
                                <Box id="7" margin="xlarge" pad="xlarge" background="light-4">

                                    exp 3
                                </Box>
                            </Collapsible>
                        <Box id="3" margin="xlarge" pad="xlarge" background="light-4">
                        <Button onClick={() => setShowExp3(!showExp3)}></Button>

                            </Box> 

                        </Box>
                        <Box direction="row">
                        <Box id="4" margin="xlarge" pad="xlarge" background="light-4">
                        <Button onClick={() => setShowExp4(!showExp4)}></Button>


                        </Box> 
                        <Collapsible direction="horizontal" open={showExp4}>
                                <Box id="8" margin="xlarge" pad="xlarge" background="light-4">

                                    exp 4
                                </Box>
                        </Collapsible>

                        </Box>
                    </Box>
                    </Stack>
                    
                </Box>
            );
        }
    
        export default Experience;