import React, { useContext } from 'react';
import { Container, Typography } from '@material-ui/core';

import useStyles from './styles';
import Items from './Items/Items';
import { MainContext } from '../../../context/context';

const Cart = () => {
    const classes = useStyles();
    const { totalPrice, cart } = useContext(MainContext);

    return (
        <Container className={classes.container}>
            {cart.length === 0 ? 
                <Typography variant="h4">Your cart is empty!</Typography>
            : <>
                    <Typography variant="h3">Cart</Typography>
                    <Items />
                    <Typography className={classes.total}>Total: {totalPrice}</Typography>
                </>
            }
        </Container>
    );
};

export default Cart;
