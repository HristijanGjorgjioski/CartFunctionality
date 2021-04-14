import React from 'react'
import { Container } from '@material-ui/core';
import Products from './Products/Products';

import useStyles from './styles';

const Home = () => {
    const classes = useStyles();

    return (
        <Container className={classes.container}>
            <Products />
        </Container>
    )
}

export default Home
