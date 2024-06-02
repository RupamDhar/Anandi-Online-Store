const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();

const uri = process.env.DATABASE_URI;
const database = process.env.DATABASE_NAME;
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

//returning ALL products
async function getAllProducts() {
    try {
        await client.connect();
        console.log('database.js 12:    connected to db');

        const result = await client.db(database).collection('Products').find({}).toArray();
        return result;
    }
    catch (error) {
        console.log(error);
    }
    finally {
        await client.close();
    }

}

//returning filtered products
async function getFilteredProducts(filters) {
    console.log('database.js 36:    ', filters);

    /* const query = {
        prod_name: { $regex: "satyajit", $options: "i" },
        prod_sizes: { $in: ["L", "XL"] },
        prod_colors: { $in: ["red", "black"] },
        prod_brand: { $in: ["FITS&FAB", "Satyajit"] },
        $or: [
            { prod_price: { $gt: 100, $lt: 1000 } },
            { prod_price: { $gt: 1500, $lt: 2000 } }
        ]
    }; */
    //above->format for creating mongodb filters
    //below->creating filters
    const query = {}
    if (filters.search !== '') query.prod_name = { $regex: filters.search, $options: 'i' };
    if (filters.size !== '') query.prod_sizes = { $in: filters.size.split('+') };
    if (filters.color !== '') query.prod_colors = { $in: filters.color.split('+') };
    if (filters.brand !== '') query.prod_brand = { $in: filters.brand.split('+') };
    if (filters.pricerange !== '') {
        const priceConditions = filters.pricerange.split('+').map(range => {
            const [minPrice, maxPrice] = range.split('-').map(Number);
            return { prod_price: { $gt: minPrice - 1, $lt: maxPrice + 1 } };
        });
        query.$or = priceConditions;
    }

    try {
        await client.connect();
        const result = await client.db(database).collection('Products').find(query).toArray();
        return result;
    }
    catch (error) {
        console.log(error);
    }
    finally {
        await client.close();
    }
}

//returning specific product with PRODUCT ID
async function getProduct(productID) {
    try {
        await client.connect();
        console.log('database.js 27:    connected to db');

        const result = await client.db(database).collection('Products').find({ prod_id: productID }).toArray();
        console.log('database.js 30:    ', result);
        return result;
    }
    catch (error) {
        console.log(error);
    }
    finally {
        await client.close();
    }
}

module.exports = {
    getAllProducts,
    getFilteredProducts,
    getProduct
}