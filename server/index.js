import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import productsRoutes from './router/product-router.js';

const PORT = process.env.PORT || 5000;

const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

app.use(productsRoutes);

app.listen(PORT, () => console.log(`App running on port ${PORT}`))