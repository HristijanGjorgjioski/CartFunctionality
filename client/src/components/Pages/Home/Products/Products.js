import React, { useContext, useEffect } from 'react'

import { MainContext } from '../../../../context/context';
import Product from './Product/Product'

const Products = () => {
    const { getProducts, products } = useContext(MainContext);

    useEffect(() => {
        getProducts();
    }, []);

    console.log(products);
    return (
        <div>
            <Product />
        </div>
    )
}

export default Products
