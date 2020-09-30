import React from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import Homepage from './Homepage';
import Cases from './Cases';

const Main = () => {
    return (
        <Switch>
            <Route exact path='/' component={Homepage} />
            <Route exact path='/country/:name' component={Cases} />
            <Route exact path='*' render={() => <Redirect to='/' />} />
        </Switch>
    );
}

export default withRouter(Main);