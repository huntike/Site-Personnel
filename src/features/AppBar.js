import React from "react";
import { css } from 'styled-components';
import { Box, Button, Header,ResponsiveContext,Menu, Grommet } from 'grommet'
import {Link} from 'react-router-dom';
import { Menu as MenuIcon } from 'grommet-icons';


const AppBar = (props) => (
    <Box
      flex align='center'
      tag='header'
      direction='row'
      align='center'
      justify='between'
      background='brand'
      pad={{ left: 'medium', right: 'small', vertical: 'small' }}
      elevation='medium'
      style={{ zIndex: '1' }}
      
      {...props}
    />
  );
  const themeAppBar = {

    button: {

      border: {

        color: '#ffffff',
      },
      extend: ({ theme }) => css`
      color: white;

      @media screen and (max-width: 768px) {
        
              

    `,
    },
  }



export const AppBars = () => {

    

    return(
      <Grommet theme={themeAppBar} >
        <Box >
            <AppBar  background= "linear-gradient(to right, #F27121, #E94057, #8A2387);  ">
                <Link to="/"><Button  label="Home"/></Link>                
                <Header >
                  <ResponsiveContext.Consumer>
                    {size =>
                      size === 'small' ? (
                        <Box justify="end" >
                          <Menu
                            color="dark-5"
                            a11yTitle="Navigation Menu"
                            dropProps={{ align: { top: 'bottom', right: 'right' } }}
                            icon={<MenuIcon color="#ffffff"/>}
                            items={[
                              {
                                label: <Link  to="/Experience"><Button label="Experience"/></Link>,
                              
                              },
                              {
                                label: <Link to="/Projet"><Button label="Projet"/></Link>,
                              },
                              {
                                label: <Link to="/Loisir"><Button label="Loisir"/></Link>,
                              },
                              {
                                label: <Link to="/Contact"><Button label="Contact"/></Link>,
                              },
                            ]}
                          />
                        </Box>
                      ) : (
                        <Box justify="end" direction="row" gap="medium">
                                <Link to="/Experience"><Button  label="Experience"/></Link>
                                <Link to="/Projet"><Button  label="Projet"/></Link>
                                <Link to="/Loisir"><Button  label="Loisir"/></Link>
                                <Link to="/Contact"><Button  label="Contact"/></Link>
                        </Box>
                      )
                    }
                  </ResponsiveContext.Consumer>              
                </Header>
            </AppBar>
          </Box>
        </Grommet>
    
    );
}

export default AppBars;