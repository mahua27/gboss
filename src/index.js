import React from 'react';
import {render} from 'react-dom';
import {provider} from 'redux'
import {BrowserRouter,Switch,Route}from 'react-router-dom';
import Login from './continers/login/login'
import Dashboard from './continers/dasboard/dasboard'
import Register from './continers/register/register'
import store from './redux/store'


render(<BrowserRouter>
  <provider store={store}>
    <Switch>
      <Route path='/login' component={Login}/>
      <Route path='/register' component={Register}/>
      <Route component={Dashboard}/>

    </Switch>

  </provider>






</BrowserRouter>, document.getElementById('root'));