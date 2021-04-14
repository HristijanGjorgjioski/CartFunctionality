import React from 'react'
import { Box } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import { Provider } from './context/context';
import Home from './components/Pages/Home/Home';
import Pizza from './components/Pages/Products/Pizza';

const App = () => {
  return (
        <Provider>
          <BrowserRouter>
              <Box>
                  <Navbar />
                  <Switch>
                      <Route exact path="/" component={Home} />
                      <Route exact path="/Pizza" component={Pizza} />
                      {/* <Route exact path="/Burger" component={Burger} /> */}
                  </Switch>
              </Box>
          </BrowserRouter>
        </Provider>
  );
};
export default App

