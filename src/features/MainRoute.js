import React from 'react';
import {LandingPage} from './LandingPage';
import {Projet} from './Projet';
import {Hobbies} from './Hobbies';
import {Contact} from './Contact';
import {Experience} from './Experience';




import { Switch, Route } from 'react-router-dom';



export const MainRoute= () => {
    return(
      <Switch>
        <Route exact path="/" component={LandingPage}/>
        <Route exact path="/Projet" component={Projet}/>
        <Route exact path="/Loisir" component={Hobbies}/>
        <Route exact path="/Contact" component={Contact}/>
        <Route exact path="/Experience" component={Experience}/>
     


      </Switch>
    )

}
export default MainRoute;