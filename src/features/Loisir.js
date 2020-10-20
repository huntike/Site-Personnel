import React from 'react';
import {Tab, WorldMap , Box} from 'grommet';
export const Loisir= () => {
  const [active, setActive] = React.useState();
    return(
      
 
      
          <Box align="center" pad="large">
            <WorldMap


                places={[
                  {
                    name: 'Tokyo',
                    location: [35.652832, 139.839478],
                    color: 'graph-1',
                    onClick: () => setActive(!active),
                  },
                  {
                    name: 'Paris',
                    location: [44.8534, 2.3488],
                    color: 'graph-1',
                    onClick: () => setActive(!active),
                  },
                  {
                    name: 'Toulouse',
                    location: [37.8534, 2.3488],
                    color: 'graph-1',
                    onClick: () => setActive(!active),
                  },
                  {
                    name: 'Miami',
                    location: [25.76167984, 	-80.1917902],
                    color: 'graph-1',
                    onClick: () => setActive(!active),
                  },
                  {
                    name: 'Bogota',
                    location: [4.598056, 	-74.075833],
                    color: 'graph-1',
                    onClick: () => setActive(!active),
                  },
                  {
                    name: 'Cartagena',
                    location: [37.6142, 	-0.995],
                    color: 'graph-1',
                    onClick: () => setActive(!active),
                  },
                  {
                    name: 'Tunis',
                    location: [33.886917, 	9.537499],
                    color: 'graph-1',
                    onClick: () => setActive(!active),
                  },
                  
              ]}
            />
            {active && <Box margin="large">Africa</Box>}
          </Box>
     
      );
    

}
export default Loisir;