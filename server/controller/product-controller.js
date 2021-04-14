import Products from '../Products/Products.js';

export const getProducts = async (req, res) => {
    return res.status(200).json({ Products });
};