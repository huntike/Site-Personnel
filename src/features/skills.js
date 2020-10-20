import React from 'react';
import {Box,Text,Stack,Meter,Grid} from 'grommet';


export const Skills= () => {
    const meterValue= [];
    const skillsValue= [50,40,60,90];
    console.log(skillsValue.length);

     for (let index = 0; index < skillsValue.length; index++){
         const item = skillsValue[index];
         console.log(item);
         const comp=<Stack anchor="center">                    
                        <Meter
                         type="circle"
                         background="light-2"
                         values={[{ value: item }]}
                         size="small"
                        thickness="medium"        
                         />
                             <Box direction="row" align="center" pad={{ bottom: 'xsmall' }}>
                                 <Text size="xxlarge" weight="bold">
                                 {item}% 
                                 </Text>
                                
                             </Box>
                    </Stack>
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