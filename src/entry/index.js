import '../common/lib';
import ReactDOM from 'react-dom';
import React from 'react';
import {Router,Route,IndexRoute,hashHistory} from 'react-router';
import { Provider } from 'react-redux';
import Frame from './Frame';
import App from '../component/App';
import {Pag} from '../component/TestPage';
import NotFound from '../component/NotFound';

ReactDOM.render((
    <Router history={hashHistory}>
      <Route path="/" component={Frame}>
        <IndexRoute component={App} />
        <Route path="/test" component={Pag} />
        <Route status="404" path="*" component={NotFound} />
      </Route>
    </Router>
), document.getElementById('react-content'));

