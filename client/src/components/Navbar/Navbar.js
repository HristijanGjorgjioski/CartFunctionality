import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, MenuItem, Toolbar, Box, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';

import { MainContext } from '../../context/context';
import useStyles from './styles';

const Navbar = () => {
    const { cartLength } = useContext(MainContext);
    const classes = useStyles();

    return (
        <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
                <Box display='flex' flexGrow={1}>
                    <MenuItem><Typography className={classes.text}><Link className={classes.link} to="/">Food Ordering Portal</Link></Typography></MenuItem>
                </Box>
                <MenuItem className={classes.cartIcon}><Link to="/cart" style={{ textDecoration: 'none' }}><ShoppingCart style={{ color: 'white' }} />{cartLength}</Link></MenuItem>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;