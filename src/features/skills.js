import React from 'react';
import {Box,Text,Stack,Meter,Heading} from 'grommet';



export const Skills= () => {
    const meterValue= [];
    const skillsValue= [50,40,60,90];
    const skillsName= ["NodeJS","AngularJS","JavaScript","HTML/CSS"];

    
     for (let index = 0; index < skillsValue.length; index++){
         const itemValue = skillsValue[index];
         const itemName = skillsName[index];
         
         const comp=
                    <Box>
                        <Stack anchor="center" >                    
                            <Meter
                            type="circle"
                            background="light-2"
                            values={[{ value: itemValue }]}
                            size="small"
                            thickness="medium"    
                                
                            />
                                <Box direction="row" align="center" pad={{ bottom: 'xsmall' }}>
                                    <Text size="xlarge" weight="bold">
                                    {itemValue}% 
                                    </Text>
                                    
                                </Box>
                                
                        </Stack>
                        <Text className="skill-name">{itemName}</Text>
                    </Box>
                   meterValue.push(comp);
     }
    return(
        <Box justify="center" align="center" >
            <Heading>Compétences</Heading>
            <Box direction="row" height="large" wrap="true" justify="center" align="center" gap="large" >
            
                
                    {meterValue}
                
            </Box>
        </Box>
        );
    }
export default Skills;