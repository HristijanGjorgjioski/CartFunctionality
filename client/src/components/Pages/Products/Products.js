import { Container, Grid, Typography } from '@material-ui/core';
import React, { useContext, useEffect } from 'react'

import { MainContext } from '../../../../context/context';
import Product from './Product/Product'
import useStyles from './styles';

const Products = () => {
    const classes = useStyles();
    const { getProducts, products } = useContext(MainContext);


    useEffect(() => {
        getProducts();
    }, []);

    return (
        <Container className={classes.container}>
                <Grid container justify="space-between" alignItems="stretch" spacing={2}>
                    {/* {products.Products.results ? products.Products.results.map((product) => {
                        return (<Grid key={product._id} item xs={6} sm={4}>
                            <Product photo={product.photo} title={product.title} price={product.price} description={product.description} weight={product.weight} _id={product._id} quantity={product.quantity} />
                        </Grid>) 
                    }) : "No products"} */}
                </Grid>
        </Container>
    )
}

export default Products
