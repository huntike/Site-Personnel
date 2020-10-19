  import React, { useState } from "react";
  import { Box, Collapsible, Grommet,  } from 'grommet';
  import { Notification } from 'grommet-icons';
  import {AppBars} from './features/AppBar';

  import {MainRoute} from './features/MainRoute';

  const theme = {
    body: {
      margin:'0px',
    },
    global: {
      colors: {
        brand: '#228BE6',
      },
      font: {
        family: 'Roboto',
        size: '18px',
        height: '20px',
      },
    },
  };


  function App() {
    
    const [showExperience, setExperience] = useState(false);


    return (
      <Grommet theme={theme}>
        <AppBars ></AppBars>
          <Box fill>
            
            <MainRoute/>

          

            < Collapsible direction="horizontal" >
          
            </Collapsible>
        </Box>
        
        
      </Grommet>
    );
  }

  export default App;
