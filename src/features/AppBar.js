import React, { useState } from "react";
import { Box, Button, Header, Menu} from 'grommet'
import {Link} from 'react-router-dom';

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

export const AppBars = () => {
    const [showSidebar, setShowSidebar] = useState(false);
    

    return(
        <Box>
            <AppBar>
                <Link to="/"><Button label="Home"/></Link>
                Logan
                <Header background="brand">
                    
                    <Link to="/Experience"><Button label="Experience"/></Link>
                    <Link to="/Projet"><Button label="Projet"/></Link>
                    <Link to="/Loisir"><Button label="Loisir"/></Link>
                    <Link to="/Contact"><Button label="Contact"/></Link>


                   
                </Header>
            </AppBar>
              
        </Box>
    );
}

export default AppBars;