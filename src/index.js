import React from 'react';
import ReactDOM from 'react-dom';
import Api from './pages/Api';
import Method from './pages/ApiMethod';
import { unregister as unregisterServiceWorker } from './registerServiceWorker'
import './index.css';
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import createBrowserHistory from "history/createBrowserHistory"
import "bootstrap/dist/css/bootstrap.css"
import golos from "golos-lib-js";
import api from "./steemjs/api/index";

console.log("init websocket");
golos.config.set("websocket", api.getDefaults().ws);
golos.api.start();

const history = createBrowserHistory({basename: 'steemjs'});

ReactDOM.render(
  <BrowserRouter history={history} basename={'steemjs'}>
  <Switch>
      <Route exact path="/" component={(props) => <Api {...props} />} />
      <Route exact path="/api" component={(props) => <Api {...props} />}/>
      <Route path="/api/:api_name/:method_name" component={(props) => <Method {...props} />}/>
  </Switch>
  </BrowserRouter>,
  document.getElementById('root')
)

unregisterServiceWorker();