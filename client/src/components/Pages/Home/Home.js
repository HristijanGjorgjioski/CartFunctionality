import React, { useContext, useEffect } from 'react'
import { Card, CardActionArea, CardContent, CardMedia, Container, Grid, Typography } from '@material-ui/core';

import useStyles from './styles';
import { MainContext } from '../../../context/context';

const Home = () => {
    const classes = useStyles();
    const { getProducts, products } = useContext(MainContext);
    
    useEffect(() => {
        getProducts();
    }, []);

    return (
        <Container className={classes.container}>
            <Grid container className={classes.mainGrid}>
                {products.Products ? products.Products[0].results.map((product) => {
                    return (
                        <Grid className={classes.itemGrid} key={product.name} item xs={6} sm={3} lg={3}>
                            <Card>
                                <CardActionArea>
                                    <CardMedia component="img" image={product.image} title="Menu" style={{ height: '220px' }} />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">{product.name}</Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    )
                }) : "No menu"}
            </Grid>
        </Container>
    )
}

export default Home
