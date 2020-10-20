  import React, { useState } from "react";
  import { Box, Collapsible, Grommet,  } from 'grommet';
  import { Notification } from 'grommet-icons';
  import {AppBars} from './features/AppBar';

  import {MainRoute} from './features/MainRoute';

  const theme = {

    global: {
      background:{

      },
      colors: {
        

      },
      font: {
        family: 'Roboto',
        size: '18px',
        height: '20px',
      },
      body: {
        margin:'0px',
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
