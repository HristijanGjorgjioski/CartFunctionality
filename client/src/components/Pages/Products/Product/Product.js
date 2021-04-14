import React, { useContext } from 'react';
import { Typography, Button, Card, CardMedia, CardContent, CardActions, CardActionArea } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';

import { MainContext } from '../../../../context/context';
import useStyles from './styles';
const CustomCard = ({ image, price, name, description, _id, quantity }) => {
    const classes = useStyles();
    const product = { image, price, name, description, _id, quantity };
    const { addToCart } = useContext(MainContext);

    return (
        <Card className={classes.root}>
            <div className={classes.details}>
                <CardContent className={classes.content}>
                    <Typography component="h5" variant="h5">{product.name}</Typography>
                    <Typography variant="subtitle1" color="textSecondary">{product.price}</Typography>
                    <Typography variant="subtitle1" color="textSecondary">{product.description}</Typography>
                </CardContent>
            </div>
            <CardMedia component="img" image={product.image} alt="pizza" />
        </Card>
    );
};

export default CustomCard;
