import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from '../components/login/login';
import DashBoard from '../components/DashBoard';
import OrdemServico from '../components/ordemServico';

export default function Routes() {
    return (
        <Switch>
            <Route exact path="/" component={Login} />
            <DashBoard>
                <Route path="/ordemServico" component={OrdemServico} />
            </DashBoard>
        </Switch>
    )
}
