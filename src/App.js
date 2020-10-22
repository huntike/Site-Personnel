  import React, { useState } from "react";
  import { Box, Grommet,  } from 'grommet';

  import {AppBars} from './features/AppBar';
  import {Footers} from './features/Footers';


  import {MainRoute} from './features/MainRoute';

  const theme = {
    breakpoints: {},

    global: {
      background:{

      },
      size: {
        xmedium:'500px'
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
    
      return (
      <Grommet theme={theme}>
        <AppBars />
          <Box>
            
            <MainRoute/>

        
        </Box>
        <Footers/>
        
      </Grommet>
    );
  }

  export default App;
