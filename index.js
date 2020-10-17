/* Initializing the MongoDB Connection using mongoose library */
require('./Database/db');

/* Initializing the Express Application */
const express = require('express');
const app = express();

/* Importing Routers to register a router in the Express */
const productRouter = require('./Routers/products')
const categoriesRouter = require('./Routers/cateogies')

/* Defining the PORT for both Production and Local purpose */
const port = process.env.PORT || 3000;

/* Parse the data as a json in the express application */
app.use(express.json());

/* Registering a router */
app.use('/products', productRouter);
app.use('/categories', categoriesRouter);

/* Started the server using the above mentioned port */
app.listen(port, () => {
    console.log(`Server listening on ${port}`)
})