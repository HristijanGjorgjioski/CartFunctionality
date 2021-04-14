import React from 'react'
import { Box } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import { Provider } from './context/context';
import Home from './components/Pages/Home/Home';

const App = () => {
  return (
        <Provider>
          <BrowserRouter>
              <Box>
                  <Navbar />
                  <Switch>
                      <Route exact path="/" component={Home} />
                  </Switch>
              </Box>
          </BrowserRouter>
        </Provider>
  );
};
export default App

