import React from 'react';
import {Box,Text,Stack,Meter,Grid} from 'grommet';
import './Skills.css'


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
                                    <Text size="xxlarge" weight="bold">
                                    {itemValue}% 
                                    </Text>
                                    
                                </Box>
                                
                        </Stack>
                        <Text className="skill-name">{itemName}</Text>
                    </Box>
                   meterValue.push(comp);
     }
    return(
        <Box>
            <Grid gap="small" columns={{ count: 4, size: 'medium' }}>
                {meterValue}
            </Grid>
        </Box>
        );
    }
export default Skills;