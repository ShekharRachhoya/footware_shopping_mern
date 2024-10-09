import { Router } from "express";
import verifyAdmin from "../../middlewares/verifyadmin.js";
import upload from "../../middlewares/upload_file.js";
import addProduct from "./add.js";

const productRoute = Router()



productRoute.post('/',  verifyAdmin, upload.array('images', 5), addProduct)





export default productRoute