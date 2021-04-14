import { Container, Grid, Typography } from '@material-ui/core';
import React, { useContext, useEffect } from 'react'

import { MainContext } from '../../../context/context';
import Product from './Product/Product'
import useStyles from './styles';

const Burger = () => {
    const classes = useStyles();
    const { getProducts, products } = useContext(MainContext);

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <Container className={classes.container}>
                <Grid container justify="center" alignItems="stretch">
                {products.Products ? products.Products[0].results[1].subItemsData.subItems.map((product) => {
                    return (
                        <Grid className={classes.itemGrid} key={product.name} item xs={12} sm={9} lg={9}>
                            <Product description={product.description} image={product.image} name={product.name} price={product.price} _id={product._id} />
                        </Grid>
                    )
                }) : "No menu"}
                </Grid>
        </Container>
    )
}

export default Burger
