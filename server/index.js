
import express from "express";
import cors from 'cors'
const app = express()
import 'dotenv/config'
import mongoose from "mongoose";

// routes
import adminLoginRoute from "./routes/admin/admin_login.js";
import productRoute from "./routes/products/controller.js";
import categoryRoute from "./routes/category/controller.js";


import path from 'path'
import { fileURLToPath } from 'url';

// Recreate __dirname in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors())


app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))

if (mongoose.connection.readyState === 0) {
    try {


        await mongoose.connect(process.env.DBURI)
        console.log('connected')
    } catch (error) {
        console.log(error);


    }
}


app.use('/admin', adminLoginRoute)
app.use('/products', productRoute)
app.use('/category', categoryRoute)






app.listen(4000, () => {

    console.log('app is running port 4000');


})