import React, { useContext } from 'react';
import { Button, Container, Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

import useStyles from './styles';
import Items from './Items/Items';
import { MainContext } from '../../../context/context';

const Cart = () => {
    const classes = useStyles();
    const { totalPrice, cart, setCart } = useContext(MainContext);
    const history = useHistory();

    const placeOrder = (e) => {
        e.preventDefault();
        setCart([]);
        history.push('/');
    }

    return (
        <Container className={classes.container}>
            {cart.length === 0 ? 
                <Typography variant="h4">Your cart is empty!</Typography>
            : <>
                    <Typography variant="h3">Cart</Typography>
                    <Items />
                    <div className={classes.totalOrder}>
                        <Typography className={classes.total}>Total: {totalPrice}</Typography>
                        <Button variant="contained" className={classes.button} onClick={placeOrder}>Place Order</Button>
                    </div>
                </>
            }
        </Container>
    );
};

export default Cart;
