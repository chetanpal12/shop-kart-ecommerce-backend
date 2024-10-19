const express = require('express');
const {PORT, DB_ALTER, DB_FORCE} = require('./config/server_config');
const ApiRouter = require('./routes/api_router');
const db = require('./config/db_config');
// const {Product,Category}=require('./models');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.text());

app.use('/api', ApiRouter); // if any req comes with url starting with /api

app.listen(PORT, async () => {
    // await Category.sync();
    // await Product.sync();
    console.log(`Server for Shopcart is Up ${PORT}`);
    if(DB_FORCE == true) {
        await db.sync({ force: true});
    } else if (DB_ALTER == true) {
        await db.sync({ alter: true});
    } else {
        await db.sync();
    }
    console.log('DB Connected');
});