const dotenv = require('dotenv');
const express = require('express');
const app = express();
const products = require('./routes/products');
dotenv.config({
    path: './.env'
})

app.use('/api',products);


const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})