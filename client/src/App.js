import React from 'react'
import { Box } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home } from '@material-ui/icons';
import Navbar from './components/Navbar/Navbar';

const App = () => {
  return (
          <BrowserRouter>
              <Box>
                  <Navbar />
                  <Switch>
                      <Route exact path="/" component={Home} />
                  </Switch>
              </Box>
          </BrowserRouter>
  );
};
export default App

