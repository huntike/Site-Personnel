import React from 'react';
import {LandingPage} from './LandingPage';
import {Projet} from './Projet';
import {Loisir} from './Loisir';
import {Contact} from './Contact';
import {Experience} from './Experience';



import { Switch, Route } from 'react-router-dom';



export const Main= () => {
    return(
      <Switch>
        <Route exact path="/" component={LandingPage}/>
        <Route exact path="/Projet" component={Projet}/>
        <Route exact path="/Loisir" component={Loisir}/>
        <Route exact path="/Contact" component={Contact}/>
        <Route exact path="/Experience" component={Experience}/>

      </Switch>
    )

}
export default Main;