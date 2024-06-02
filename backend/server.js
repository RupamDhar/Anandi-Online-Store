const express = require('express');
const path = require('path');
const cors = require('cors');
require('dotenv').config();
const database = require('./database.js');

const app = express();
app.use(cors());

//testing if server working
app.get('/', (req, res)=> {
    res.send("Server is online.");
});

//path to fetch products on home page
app.get('/api/products', async (req, res)=>{
    console.log('server.js 18:  ', Object.keys(req.query).length, req.query);

    if (Object.keys(req.query).length !== 0) res.json(await database.getFilteredProducts(req.query));
    else res.json(await database.getAllProducts());
});

//displaying particular product with product ID
app.get('/api/products/:id', async(req, res)=>{
    const productID = req.params.id;
    res.json(await database.getProduct(productID));
});


//sever application listening to...
const port = process.env.PORT || 8001;
app.listen(port, ()=>console.log(`listening to http://127.0.0.1:${port}`));