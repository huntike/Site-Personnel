import React from 'react';
import {Footer,Text,Anchor} from 'grommet';
import './Footers.css';


export const Footers= () => {

    return(
        <Footer justify="center" pad="medium">
            <Text textAlign="center" size="medium">
                © 2019 Copyright Grommet
            </Text>
        </Footer>
    );

}


export default Footers;