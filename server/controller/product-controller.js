import Products from '../Products/Products.js';

export const getProducts = async (req, res) => {
    console.log(Products);
    return res.status(200).json({ Products });
};