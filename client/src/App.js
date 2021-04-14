import React from 'react'
import { Box } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import { Provider } from './context/context';
import Home from './components/Pages/Home/Home';
import Pizza from './components/Pages/Products/Pizza';
import Burger from './components/Pages/Products/Burger';
import Cart from './components/Pages/Cart/Cart';

const App = () => {
  return (
        <Provider>
          <BrowserRouter>
              <Box>
                  <Navbar />
                  <Switch>
                      <Route exact path="/" component={Home} />
                      <Route exact path="/Pizza" component={Pizza} />
                      <Route exact path="/Burger" component={Burger} />
                      <Route exact path="/cart" component={Cart} />
                  </Switch>
              </Box>
          </BrowserRouter>
        </Provider>
  );
};
export default App

