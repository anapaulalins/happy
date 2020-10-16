import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import Landing from './pages/Landing';
import OrphanegesMap from './pages/OrphanegesMap';
import Orphanege from './pages/Orphanage';
import CreateOrphanage from './pages/CreateOrphanage';

function Routes(){
    return (
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Landing} />
            <Route path="/app" component={OrphanegesMap} />
            <Route path="/orphaneges/create" component={CreateOrphanage}/>
            <Route path="/orphanages/:id" component={Orphanege}/>
        </Switch>
        </BrowserRouter>
    );
}

export default Routes;