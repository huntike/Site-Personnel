  import React, { useState } from "react";
  import { Box, Grommet,Button,Heading  } from 'grommet';
  import { css } from 'styled-components';

  import {AppBars} from './features/AppBar';
  import {Footers} from './features/Footers';


  import {MainRoute} from './features/MainRoute';

  const theme = {


    tab: {
      active: {
        
        color: '#E94057',
      },

      border: undefined,
      color: 'black',
      hover: {
        background: 'dark-6',
      },
      margin:{
        horizontal:'small'
      },
      pad: {
        bottom: undefined,
        horizontal: 'large',
        vertical:'small',
      },
      
      extend: ({ theme }) => css`
      border-radius: 4px;

      box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.4);

    `,
    },

    global: {
      focus:{
        border:{
          color:"#F27121"
        },
        extend: ({ theme }) => css`
      border-radius: 10px;
      `
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
