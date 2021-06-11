import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from './dashboard';
import Create from './Create';

const Main = () => {
    return(
        <Switch>
            <Route exact path='/calories' component={Dashboard}></Route>
            <Route path='/create' component={Create}></Route>
        </Switch>
    );
}

export default Main;