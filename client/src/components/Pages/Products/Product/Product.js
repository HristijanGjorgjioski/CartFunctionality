import React, { useContext } from 'react';
import { Typography, Button, Card, CardMedia, CardContent } from '@material-ui/core';

import { MainContext } from '../../../../context/context';
import useStyles from './styles';

const CustomCard = ({ image, price, name, description, _id, quantity }) => {
    const classes = useStyles();
    const product = { image, price, name, description, _id, quantity };
    const { addToCart } = useContext(MainContext);

    return (
        <Card className={classes.container}>
            <div className={classes.details}>
                <CardContent className={classes.content}>
                    <Typography component="h5" variant="h5">{product.name}</Typography>
                    <Typography variant="subtitle1" color="textSecondary">{product.price}</Typography>
                    <Typography variant="subtitle1" color="textSecondary">{product.description}</Typography>
                    <Button variant="contained" className={classes.button} onClick={() => addToCart(product)}>Order Now</Button>
                </CardContent>
            </div>
            <CardMedia className={classes.image} component="img" image={product.image} alt="pizza" />
        </Card>
    );
};

export default CustomCard;
