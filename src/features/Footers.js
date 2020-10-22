import React from 'react';
import {Footer,Text} from 'grommet';
import './Footers.css';


export const Footers= () => {

    return(
        <Footer justify="center" pad="medium"  background= "linear-gradient(to right, #F27121, #E94057, #8A2387);  ">
            <Text textAlign="center" size="medium">
                © 2019 Copyright Logan
            </Text>
        </Footer>
    );

}


export default Footers;