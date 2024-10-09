import { Router } from "express";
import verifyAdmin from "../../middlewares/verifyadmin.js";
import addCategory from "./add.js";



const categoryRoute = Router()



categoryRoute.post('/', verifyAdmin, addCategory)






export default categoryRoute 