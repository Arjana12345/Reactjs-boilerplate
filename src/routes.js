import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomeContainer from './containers/homeContainer';


const Routes = () =>(
  
  <Router>
    <Route path="/" component={HomeContainer} />
  </Router>

);
export default Routes;
