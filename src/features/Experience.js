import React, { useState } from "react";
import { Box, Diagram, Stack, Collapsible, Button,Text, Grommet} from 'grommet'

const themeExp = {

    Button:{
        border: {

            color: '#ffffff',
          },
    },
    colors:{
        brand:'#F27121'
    }

};


export const Experience = () => {
    const [showExp1, setShowExp1] = useState(false);
    const [showExp2, setShowExp2] = useState(false);
    const [showExp3, setShowExp3] = useState(false);
    const [showExp4, setShowExp4] = useState(false);

    function ShowExp(numberExp) {        
        setShowExp4(false);
        setShowExp1(false);
        setShowExp2(false);
        setShowExp3(false);
        if (numberExp == 1){
            setShowExp1(true);
        }
        else if(numberExp == 2){
            setShowExp2(true);
        }
        else if(numberExp == 3){
        setShowExp3(true);            
        }
        else if(numberExp == 4){
        setShowExp4(true);            
        }        
    };


    return(
        <Grommet theme={themeExp}>
            <Stack guidingChild={1}>
                <Diagram
                        connections={[
                        {
                            fromTarget: '1',
                            toTarget: '2',
                            thickness: 'medium',
                            color: 'brand',
                        },
                        {
                            fromTarget: '2',
                            toTarget: '3',
                            thickness: 'medium',
                            color: 'brand',
                           
                        },
                        {
                            fromTarget: '3',
                            toTarget: '4',
                            thickness: 'medium',
                            color: 'brand',
                           
                        },

                        ]}
                    />
                    <Box align="center">
                        <Box  direction="row">
                            <Collapsible direction="horizontal" open={showExp1}>
                                <Box
                                flex
                                width="medium"
                                background="light-2"
                                pad="small"
                                elevation="small"
                                >
                                <Text size="xlarge">stage en entreprise</Text>
                                </Box>
                            </Collapsible>
                            
                            <Box id="1" margin="xlarge" pad="xlarge" background="light-4">
                                <Button onClick={() => ShowExp(1)} label="stage en entreprise"></Button>
                            </Box>
                        </Box>
                        <Box direction="row">
                            <Box id="2" margin="xlarge" pad="xlarge" background="light-4">
                                <Button onClick={() => ShowExp(2)} label="job étudiant intermarché"></Button>

                            </Box> 
                            <Collapsible direction="horizontal" open={showExp2}>
                                <Box
                                flex
                                width="medium"
                                background="light-2"
                                pad="small"
                                elevation="small"
                                >
                                <Text size="xlarge">job étudiant intermarché</Text>
                                </Box>
                            </Collapsible>

                        </Box>
                        <Box direction="row">
                        <Collapsible direction="horizontal" open={showExp3}>
                                <Box
                                flex
                                width="medium"
                                background="light-2"
                                pad="small"
                                elevation="small"
                                >
                                <Text size="xlarge">stage 2eme année</Text>
                                </Box>
                            </Collapsible>
                        <Box id="3" margin="xlarge" pad="xlarge" background="light-4">
                        <Button  onClick={() => ShowExp(3)} label="stage 2eme année"></Button>

                            </Box> 

                        </Box>
                        <Box direction="row">
                        <Box id="4" margin="xlarge" pad="xlarge" background="light-4">
                        <Button onClick={() => ShowExp(4)} label="job étudiant"></Button>


                        </Box> 
                        <Collapsible direction="horizontal" open={showExp4}>
                                <Box
                                flex
                                width="medium"
                                background="light-2"
                                pad="small"
                                elevation="small"
                                >
                                <Text size="xlarge">job étudiant</Text>
                                </Box>
                            </Collapsible>

                        </Box>
                    </Box>
                    </Stack>
                    
                </Grommet>
            );
        }
    
export default Experience;