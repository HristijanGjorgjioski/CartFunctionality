import React, { useContext } from 'react';
import { Card, CardContent, Typography, Button, CardMedia } from '@material-ui/core';

import { MainContext } from '../../../../context/context';
import useStyles from './styles';

const Items = () => {
    const { cart, deleteFromCart } = useContext(MainContext);
    const classes = useStyles();

    const cartItems = cart.map((product) => {
        return (
            <Card key={product._id} className={classes.container}>
                <div className={classes.details}>
                    <CardContent className={classes.content}>
                        <Typography component="h5" variant="h5">{product.name}</Typography>
                        <Typography variant="subtitle1" color="textSecondary">{product.price}</Typography>
                        <Typography variant="subtitle1" color="textSecondary">{product.description}</Typography>
                        <Typography variant="subtitle1" color="textSecondary">Quantity: {product.quantity}</Typography>
                        <Button variant="contained" className={classes.button} onClick={() => deleteFromCart(product._id)}>Remove</Button>
                    </CardContent>
                </div>
                <CardMedia className={classes.image} component="img" image={product.image} alt="food" />
            </Card>
        );
    });
    
    return (
        <>
            {cartItems}
        </>
    );
};

export default Items;